import { Component, OnInit, TemplateRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Team, TeambyParticipant, Participant } from 'src/app/classes/interfaces';
import { CommonAlertsService } from 'src/app/services/common/common-alerts.service';
import { CommonService } from 'src/app/services/common/common.service';
import { TeamsService } from 'src/app/services/teams/teams.service';
import { MatTableDataSource} from '@angular/material/table';
import { ParticipantsService } from 'src/app/services/participants/participants.service';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.scss']
})
export class TeamInfoComponent implements OnInit {
  hash_participant: String;
  hash_activity: String;
  hash_team: String;
  teams: TeambyParticipant[] = [];
  participants: Participant[] = []
  currentTeam: TeambyParticipant;
  currentTeamWithParticipants: Team;
  fileName: String = "Choose team photo";
  teamImg: File | null = null;
  formNewTeam: FormGroup;
  imageTeam: String;
  dataSearch: any;
  searchForm: FormGroup;
  //displayedColumns: string[] = ['name', 'last_name', 'email', 'add'];
  displayedColumns: string[] = ['name', 'email', 'add'];
  @Output() teamEmitter = new EventEmitter < string > (); 

  constructor(
    private teamsService: TeamsService, 
    private participantsService: ParticipantsService,
    private comonAlerts: CommonAlertsService,
    private apiConfig: CommonService,
    private dialog: MatDialog,
    private fb: FormBuilder,
  ) {
    this.imageTeam = this.apiConfig.imagesTeams;
    this.validateForms();
  }

  ngOnInit(): void {
    this.hash_participant = localStorage.getItem('hash_participant');
    this.hash_activity = localStorage.getItem('hash_activity_profile').toString();
    this.getTeamByParticipantHash();
  }

  getTeamByParticipantHash(){
    this.teamsService.getTeamByParticipantHash(this.hash_participant).subscribe((response: any) => {
      if (response.header.code == 200) {
        this.teams = response.data;
        this.teams.forEach( (element) => {
          this.currentTeam = element;
        });
        if (this.currentTeam != null){
          this.hash_team = this.currentTeam.hash_team;
          this.teamEmitter.emit(this.hash_team.toString());
          this.getTeam();
        }
      } else {
        this.comonAlerts.showWarnning(response.header.message)
      }
    }, (error) => {
      this.comonAlerts.showToastError(error)
    });
  }

  getTeam(){
    this.teamsService.getTeamByHash(this.hash_team).subscribe((response: any) => {
      if (response.header.code == 200) {
        this.currentTeamWithParticipants = response.data;
      } else {
        this.comonAlerts.showWarnning(response.header.message)
      }
    }, (error) => {
      this.comonAlerts.showToastError(error)
    });
  }

  showModal(templateRef: TemplateRef<any>){
    this.dialog.open(templateRef, {
      disableClose: true,
    });
  }

  onFileSelected(event) {
    if(event.target.files.length > 0) 
    {
      this.teamImg = event.target.files[0];
      this.fileName = this.teamImg.name;
    }
  }

  newTeamSubmit(){
    const formData = new FormData();
    formData.append('file', this.teamImg);
    formData.append('team_name', this.formNewTeam.value.teamName);
    this.teamsService.addTeam(formData, this.hash_activity, this.hash_participant).subscribe((response: any) => {
      if (response.header.code == 200) {
        this.hash_team = response.data;
        this.getTeamByParticipantHash();
        this.comonAlerts.showSuccess(response.header.message);
        this.dialog.closeAll();
      } else {
        this.comonAlerts.showWarnning(response.header.message);
      }
    }, (error) => {
      this.comonAlerts.showToastError(error);
    });
  }

  validateForms() {
    this.formNewTeam = this.fb.group({
      teamImg: [''],
      teamName: ['', [Validators.required]]
    })

    this.searchForm = this.fb.group({
      searchText: ['']
    })
  }

  SearchSubmit(){
    this.participantsService.searchParticipant(this.searchForm.value.searchText).subscribe((response: any) => {
      if (response.header.code == 200) {
        this.dataSearch = new MatTableDataSource(response.data);
      } else {
        this.comonAlerts.showWarnning(response.header.message);
      }
    }, (error) => {
      this.comonAlerts.showToastError(error);
    });
  }

  addToTeam(hashPart: any){
    var params = {
      hash_participant: hashPart,
      hash_team: this.hash_team
    }
    let body = JSON.stringify(params);
    this.teamsService.addParticipantToTeam(body).subscribe((response: any) => {
      if (response.header.code == 200) {
        this.comonAlerts.showSuccess(response.header.message);
        this.getTeam();
      } else {
        this.comonAlerts.showWarnning(response.header.message);
      }
    }, (error) => {
      this.comonAlerts.showToastError(error);
    });
  }

  removeFromTeam(hashPart: any){
    var params = {
      hash_participant: hashPart,
      hash_team: this.hash_team
    }
    let body = JSON.stringify(params);
    this.teamsService.deleteParticipantFromTeam(body).subscribe((response: any) => {
      if (response.header.code == 200) {
        this.comonAlerts.showSuccess(response.header.message);
        this.getTeam();
        this.getTeamByParticipantHash();
      } else {
        this.comonAlerts.showWarnning(response.header.message);
      }
    }, (error) => {
      this.comonAlerts.showToastError(error);
    });
  }

}
