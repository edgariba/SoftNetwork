import { Component, OnInit, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { EvidenceActivity, FirstLeaderboard, FirstLeaderboardTeam } from 'src/app/classes/interfaces';
import { ActivitiesService } from 'src/app/services/activities/activities.service';
import { CommonAlertsService } from 'src/app/services/common/common-alerts.service';
import { CommonService } from 'src/app/services/common/common.service';
import { EvidencesService } from 'src/app/services/evidences/evidences.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  hashActivity: any
  evidence: EvidenceActivity
  isLoaded: boolean = false
  isLoadedLeaderboard: boolean = false
  filesEvidence: any
  hash_participant: any
  isLoading: boolean = false;
  pageCount: any;
  currentPage = 1;
  limit = 8
  profilePicture: any
  teamPicture: any
  firstLeaderboard: FirstLeaderboard[] = []
  firstLeaderboardTeam: FirstLeaderboardTeam[] = []
  constructor(private dialog: MatDialog, private activityServices: ActivitiesService,
    private comonAlerts: CommonAlertsService, private activeRoute: ActivatedRoute, private evidenceService: EvidencesService, private apiConfig: CommonService,) {
    this.filesEvidence = this.apiConfig.imagesEvidence;
    this.profilePicture = this.apiConfig.imagesProfile,
    this.teamPicture = this.apiConfig.imagesTeams;
    this.hash_participant = localStorage.getItem("hash_participant")
  }
  array: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  ngOnInit(): void {
    this.hashActivity = this.activeRoute.snapshot.params['hash_activity']
    this.getEvidenceByActivity(true)
  }

  openModal(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef, {
      width: window.innerWidth + 'px', height: "100vh", disableClose: true, position: {
        top: '0px',
        left: '0px',
        bottom: '0px'
      },
    });
  }

  addPage() {
    this.currentPage++;
    this.getEvidenceByActivity(false);
  }

  getPagination() {
    var itemsInView = this.currentPage * this.limit;
    if (itemsInView < this.pageCount) {
      return true;
    } else {
      return false;
    }
  }

  getEvidenceByActivity(first: boolean) {
    this.loadSpinner()
    this.activityServices.getEvidenceByActivity(this.hashActivity, this.currentPage, this.limit).subscribe(
      (response) => {
        if (response.header.code == 200) {
          if (this.evidence == undefined) {
            this.evidence = response.data;
          } else {
            response.data.evidence.map((evi) => {
              this.evidence.evidence.push(evi)
            })
          }
          this.pageCount = response.data.pagination.page_count;
          this.isLoaded = true;
          if (first == true) {
            this.getLeaderboardData(response.data)
          }
        } else {
          this.comonAlerts.showWarnning(response.header.message)
        }
        this.terminateSpinner()
      }, (error) => {
        this.terminateSpinner()
        this.comonAlerts.showToastError(error)
      }
    )
  }

  getLeaderboardData(evidence: EvidenceActivity) {
    this.isLoadedLeaderboard = false;
    if (evidence.activity.rating_type == "kilometers") {
      if (evidence.activity.type == "team") {
        this.getFirstPlacesByKilometersByTeam()
      }
      if (evidence.activity.type == "acum") {
        this.getFirstPlacesKilometers()
      }
    }


    if (evidence.activity.rating_type == "tiempo") {
      this.getFirstPlacesByTime()
    }

    if (evidence.activity.rating_type == "actions") {
      this.getFirstPlacesByQuantityActions()
    }

    if (evidence.activity.rating_type == "maxrepetitions") {
      this.getFirstPlacesByRepetitionsOrPoints()
    }
  }

  getFirstPlacesKilometers() {
    this.loadSpinner()
    this.evidenceService.getFirstPlacesByKilometers(this.hashActivity).subscribe(
      (response) => {
        if (response.header.code == 200) {
          this.firstLeaderboard = response.data
          this.isLoadedLeaderboard = true
        } else {
          this.comonAlerts.showWarnning(response.header.message)
        }
        this.terminateSpinner()
      }, (error) => {
        this.terminateSpinner()
        this.comonAlerts.showToastError(error)
      }
    )
  }

  getFirstPlacesByTime() {
    this.loadSpinner()
    this.evidenceService.getFirstPlacesByTime(this.hashActivity).subscribe(
      (response) => {
        if (response.header.code == 200) {
          this.firstLeaderboard = response.data
          this.isLoadedLeaderboard = true
        } else {
          this.comonAlerts.showWarnning(response.header.message)
        }
        this.terminateSpinner()
      }, (error) => {
        this.terminateSpinner()
        this.comonAlerts.showToastError(error)
      }
    )
  }


  getFirstPlacesByQuantityActions() {
    this.loadSpinner()
    this.evidenceService.getFirstPlacesByQuantityActions(this.hashActivity).subscribe(
      (response) => {
        if (response.header.code == 200) {
          this.firstLeaderboard = response.data
          this.isLoadedLeaderboard = true
        } else {
          this.comonAlerts.showWarnning(response.header.message)
        }
        this.terminateSpinner()
      }, (error) => {
        this.terminateSpinner()
        this.comonAlerts.showToastError(error)
      }
    )
  }


  getFirstPlacesByRepetitionsOrPoints() {
    this.loadSpinner()
    this.evidenceService.getFirstPlacesByRepetitionsOrPoints(this.hashActivity).subscribe(
      (response) => {
        if (response.header.code == 200) {
          this.firstLeaderboard = response.data
          this.isLoadedLeaderboard = true
        } else {
          this.comonAlerts.showWarnning(response.header.message)
        }
        this.terminateSpinner()
      }, (error) => {
        this.terminateSpinner()
        this.comonAlerts.showToastError(error)
      }
    )
  }


  getFirstPlacesByKilometersByTeam() {
    this.loadSpinner()
    this.evidenceService.getFirstPlacesByKilometersByTeam(this.hashActivity).subscribe(
      (response) => {
        if (response.header.code == 200) {
          this.firstLeaderboardTeam = response.data          
          this.isLoadedLeaderboard = true
        } else {
          this.comonAlerts.showWarnning(response.header.message)
        }
        this.terminateSpinner()
      }, (error) => {
        this.terminateSpinner()
        this.comonAlerts.showToastError(error)
      }
    )
  }


  getDataLeaderboardByActivity() {
    this.loadSpinner()
    this.activityServices.getEvidenceByActivity(this.hashActivity, this.currentPage, this.limit).subscribe(
      (response) => {
        if (response.header.code == 200) {
          if (this.evidence == undefined) {
            this.evidence = response.data;
          } else {
            response.data.evidence.map((evi) => {
              this.evidence.evidence.push(evi)
            })
          }
          this.pageCount = response.data.pagination.page_count;
          this.isLoaded = true;
          //console.warn(this.evidence)
        } else {
          this.comonAlerts.showWarnning(response.header.message)
        }
        this.terminateSpinner()
      }, (error) => {
        this.terminateSpinner()
        this.comonAlerts.showToastError(error)
      }
    )
  }

  getImage(firstLeaderboard: FirstLeaderboard) {
    if (firstLeaderboard.participant.profile_picture == null) {
      return "./assets/img/user.svg";
    } else {
      return this.profilePicture + firstLeaderboard.participant.profile_picture
    }
  }

  getImageTeam(firstLeaderboard: FirstLeaderboardTeam) {
    if (firstLeaderboard.team.team_image == null) {
      return "./assets/img/team.svg";
    } else {
      return this.teamPicture + firstLeaderboard.team.team_image
    }
  }

  addNumberData(numero: any) {
    if (numero > 0 && numero < 10) {
      return "0" + numero;
    } else {
      return numero;
    }
  }

  convertTime(time: number) {
    var hours = Math.floor(time / 3600);
    var minutes = Math.floor((time % 3600) / 60);
    var seconds = time % 60;

    var result = ("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
    return result;
  }


  convertDistance(metros: number) {
    var conversion = metros / 1000
    return conversion
  }


  loadSpinner(): void {
    this.isLoading = true;
  }

  terminateSpinner(): void {
    setTimeout(() => this.isLoading = false, 500);
  }
}
