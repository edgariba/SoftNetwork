import { Component, OnInit } from '@angular/core';
import { Evidence } from 'src/app/classes/interfaces';
import { CommonAlertsService } from 'src/app/services/common/common-alerts.service';
import { CommonService } from 'src/app/services/common/common.service';
import { EvidencesService } from 'src/app/services/evidences/evidences.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  gallery: Evidence[] = [];
  private comonAlerts: CommonAlertsService;
  imagesEvidence: String;

  constructor(
    private evidencesService: EvidencesService,
    private apiConfig: CommonService
  ) { 
    this.imagesEvidence = this.apiConfig.imagesEvidence;
  }

  ngOnInit(): void {
    this.getGallery();
  }

  getGallery() {
    this.evidencesService.getEvidenceGallery().subscribe(
      (response) => {
        if (response.header.code == 200) {
          this.gallery = response.data;
        } else {
          this.comonAlerts.showWarnning(response.header.message)
        }
      }, (error) => {
        this.comonAlerts.showToastError(error)
      }
    )
  }

}
