import { Component, OnInit } from '@angular/core';
import { Participant } from 'src/app/classes/interfaces';
import { CommonAlertsService } from 'src/app/services/common/common-alerts.service';
import { CommonService } from 'src/app/services/common/common.service';
import { ParticipantsService } from 'src/app/services/participants/participants.service';

@Component({
  selector: 'app-paricipant-info',
  templateUrl: './paricipant-info.component.html',
  styleUrls: ['./paricipant-info.component.scss']
})
export class ParicipantInfoComponent implements OnInit {
  hash_participant: String;
  participant: Participant;
  imageFlag: String;
  imageProfile: String;

  constructor(
    private participantsService: ParticipantsService, 
    private comonAlerts: CommonAlertsService,
    private apiConfig: CommonService 
  ) { 
    this.imageFlag = this.apiConfig.imagesFlags;
    this.imageProfile = this.apiConfig.imagesProfile;
  }

  ngOnInit(): void {
    this.hash_participant = localStorage.getItem('hash_participant');
    this.getParticipantByHash();
  }

  getParticipantByHash(){
    this.participantsService.getParticipantByHash(this.hash_participant).subscribe((response: any) => {
      if (response.header.code == 200) {
        this.participant = response.data;
      } else {
        this.comonAlerts.showWarnning(response.header.message)
      }
    }, (error) => {
      this.comonAlerts.showToastError(error)
    });
  }

}
