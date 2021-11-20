import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonAlertsService } from '../../services/common/common-alerts.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EvidencesService } from 'src/app/services/evidences/evidences.service';

@Component({
  selector: 'app-upload-evidence',
  templateUrl: './upload-evidence.component.html',
  styleUrls: ['./upload-evidence.component.scss']
})
export class UploadEvidenceComponent implements OnInit {
  rating_type: String;
  hash_participant: String;
  hash_activity: String;
  evidenceFile: File | null = null;
  fileName: String = "No file chosen";
  formEvidence: FormGroup;
  seconds: any = 0;
  isLoading: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private comonAlerts: CommonAlertsService, 
    private fb: FormBuilder,
    private evidencesSevice: EvidencesService,
    public dialogRef: MatDialogRef<UploadEvidenceComponent>
  ) {
    this.validateFormulario();
  }

  ngOnInit(): void {
    this.rating_type = this.data.rating_type;
    this.hash_participant = this.data.hash_participant;
    this.hash_activity = this.data.hash_activity;
  }

  handleFileInput(files: FileList) {
    this.evidenceFile = files.item(0);
  }

  onFileSelected(event) {
    if(event.target.files.length > 0) 
    {
      this.evidenceFile = event.target.files[0];
      this.fileName = this.evidenceFile.name;
       //type:"image/jpeg"
       //type:"video/mp4"
    }
  }

  loadSpinner(): void {
    this.isLoading = true;
  }

  terminateSpinner(): void {
    setTimeout(() => this.isLoading = false, 500);
  }

  evidenceSubmit(){
    this.loadSpinner()
    const formData = new FormData();
    const regexVid = /^video/;
    const regexImg= /^image/;
    const fileType = this.evidenceFile.type;
    var isImage: Boolean = false;
    var isVideo: Boolean = false;
    formData.append('file', this.evidenceFile);
    this.seconds = this.formEvidence.value.timesec;
    this.seconds = this.seconds + (this.formEvidence.value.timehrs * 3600);
    this.seconds = this.seconds + (this.formEvidence.value.timemin * 60);
    switch(this.rating_type) { 
      case 'kilometers':{
        formData.append("distance", this.formEvidence.value.distance);
        break;
      }
      case 'tiempo':{
        formData.append("time", this.seconds);
        break;
      }
      case 'judge':{
        formData.append("description", this.formEvidence.value.description);
        break;
      }
      case 'maxrepetitions':{
        formData.append("repetitions", this.formEvidence.value.repetitions);
        break;
      }
    }
    isImage = regexImg.test(fileType);
    isVideo = regexVid.test(fileType);
    if (isImage){
      formData.append("type_evidence", "Foto");
      this.evidencesSevice.addEvidencePhoto(formData, this.hash_participant, this.hash_activity).subscribe((response: any) => {
        if (response.header.code == 200) {
          this.comonAlerts.showSuccess(response.header.message);
          this.dialogRef.close();
        } else {
          this.comonAlerts.showWarnning(response.header.message);
        }
        this.terminateSpinner()
      }, (error) => {
        this.comonAlerts.showToastError(error);
        this.terminateSpinner()
      });
    } else if (isVideo){
      formData.append("type_evidence", "Video");
      this.evidencesSevice.addEvidenceVideo(formData, this.hash_participant, this.hash_activity).subscribe((response: any) => {
        if (response.header.code == 200) {
          this.comonAlerts.showSuccess(response.header.message);
          this.dialogRef.close();
        } else {
          console.log(response.header.message);
          this.comonAlerts.showWarnning(response.header.message);
        }
        this.terminateSpinner()
      }, (error) => {
        console.log(error);
        this.comonAlerts.showToastError(error);
        this.terminateSpinner()
      });
    }    
  }

  validateFormulario() {
    this.formEvidence = this.fb.group({
      file: ['', [Validators.required]],
      timehrs: ['', [Validators.maxLength(2)]],
      timemin: ['', [Validators.maxLength(2)]],
      timesec: ['', [Validators.maxLength(6)]],
      distance: ['', [Validators.maxLength(10)]],
      description: ['', [Validators.maxLength(250)]],
      repetitions: ['', [Validators.maxLength(5)]]
    })
  }

}

