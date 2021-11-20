import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CatWithActivities, Evidence, ActiEvidence } from 'src/app/classes/interfaces';
import { UploadEvidenceComponent } from 'src/app/dialogs/upload-evidence/upload-evidence.component';
import { ActivitiesService } from 'src/app/services/activities/activities.service';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { CommonAlertsService } from 'src/app/services/common/common-alerts.service';
import { CommonService } from 'src/app/services/common/common.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  hash_participant: String;
  hash_activity: String;
  hash_team: String;
  evidences: Evidence[] = [];
  imagesEvidence: String;
  latestEvidences: Evidence[] = [];
  catWithActivities: CatWithActivities[] = [];
  overviewPage: Boolean = true;
  currentActivity: ActiEvidence;
  currentEvidences: Evidence[] = [];
  isTeamActivity: Boolean = false;
  isLoading: boolean = false;

  constructor(
    private categoriesService: CategoriesService,
    private comonAlerts: CommonAlertsService,
    private activityService: ActivitiesService,
    private apiConfig: CommonService,
    public dialog: MatDialog,
    private route: ActivatedRoute
  ) {
    this.imagesEvidence = this.apiConfig.imagesEvidence;
  }

  ngOnInit(): void {
    this.hash_participant = localStorage.getItem('hash_participant');
    //this.hash_participant = '51b8178a560b4a2b'; 
    //this.loadActivity("2d339b38-e773-4647");
    if (this.route.snapshot.paramMap.get('hash_activity')) {
      this.overviewPage = false;
      //console.log(this.route.snapshot.paramMap.get('hash_activity'));
      this.loadActivity(this.route.snapshot.paramMap.get('hash_activity'));
    }
    this.getEvidenceByParticipant();
    this.getAllCategoriesWithImages();
  }

  loadSpinner(): void {
    this.isLoading = true;
  }

  terminateSpinner(): void {
    setTimeout(() => this.isLoading = false, 500);
  }

  receiveTeam($event: string) {
    this.hash_team = $event;
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

  openUploadDialog() {
    const registerDialog = this.dialog.open(UploadEvidenceComponent, {
      data: {
        rating_type: this.currentActivity.rating_type,
        hash_participant: this.hash_participant,
        hash_activity: this.hash_activity
      }
    });
  }

  changePage(value: Boolean) {
    this.overviewPage = value;
    if (this.overviewPage) {
      this.currentActivity = null;
    }
  }

  getAllCategoriesWithImages() {
    this.loadSpinner()
    this.categoriesService.getAllCategoriesWithImages().subscribe(
      (response) => {
        if (response.header.code == 200) {
          this.catWithActivities = response.data;
        } else {
          this.comonAlerts.showWarnning(response.header.message);
        }
        this.terminateSpinner()
      }, (error) => {
        this.comonAlerts.showToastError(error);
        this.terminateSpinner()
      }
    )
  }

  getEvidenceByParticipant() {
    this.loadSpinner()
    this.activityService.getEvidenceByParticipant(this.hash_participant).subscribe((response: any) => {
      if (response.header.code == 200) {
        this.evidences = response.data;
        this.evidences.forEach((element) => {
          if (!this.latestEvidences.find(x => x.activity == element.activity)) {
            this.latestEvidences.push(element);
          }
        });
      } else {
        this.comonAlerts.showWarnning(response.header.message)
      }
      this.terminateSpinner()
    }, (error) => {
      this.comonAlerts.showToastError(error)
      this.terminateSpinner()
    });
  }

  changeDateFormat(date: any) {
    const d = new Date(date);
    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
    let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    let newDate = `${da}/${mo}/${ye}`;
    return (newDate);
  }

  loadActivity(hash_activity_current: String) {
    this.loadSpinner()
    this.hash_activity = hash_activity_current;
    localStorage.setItem("hash_activity_profile", this.hash_activity.toString());
    var params = {
      hash_activity: hash_activity_current,
      hash_participant: this.hash_participant
    }
    let body = JSON.stringify(params);
    this.activityService.getEvidenceByParticipantActivity(body).subscribe((response: any) => {
      if (response.header.code == 200) {
        this.currentActivity = response.data.activity;
        this.currentEvidences = response.data.evidence;
        if (this.currentActivity.type === "team") {
          this.isTeamActivity = true;
        } else {
          this.isTeamActivity = false;
        }
      } else {
        this.comonAlerts.showWarnning(response.header.message);
      }
      this.terminateSpinner()
    }, (error) => {
      this.comonAlerts.showToastError(error);
      this.terminateSpinner()
    });
  }

}
