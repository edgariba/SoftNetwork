import { Component, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonAlertsService } from 'src/app/services/common/common-alerts.service';
import { ParticipantsService } from 'src/app/services/participants/participants.service';
import { RegisterDialogComponent } from '../../dialogs/register-dialog/register-dialog.component';
import * as CryptoJS from 'crypto-js';
import { CommonService } from 'src/app/services/common/common.service';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.scss']
})
export class InitialComponent {
  title = 'CXA Wellness Games';
  formLogin: FormGroup;

  constructor(
    public dialog: MatDialog, 
    private router: Router, 
    private fb: FormBuilder,
    private participantsService: ParticipantsService, 
    private comonAlerts: CommonAlertsService,
    private apiConfig: CommonService
    ){
    document.getElementById("myHeader").style.display = "none";
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.maxLength(250), Validators.email]],  
      password: ['', [Validators.required]]
    })
  }

  openRegisterDialog() {
    const registerDialog = this.dialog.open(RegisterDialogComponent, {
    });
  }

  btnClick() {
    localStorage.setItem("hash_participant", "51b8178a560b4a2b")
    //localStorage.setItem("hash_participant", "0c10e7b6-8cd6-432f")
    this.router.navigate(['/home']);
  };

  showModal(templateRef: TemplateRef<any>){
    this.dialog.open(templateRef, {
      panelClass: 'login-modal'
    });
  }

  login(){
    if (!this.formLogin.valid) {
      return;
    }
    var encrypted_pass = CryptoJS.AES.encrypt(this.formLogin.value.password,this.apiConfig.encript).toString();
    var params = {
      email: this.formLogin.value.email,
      password: encrypted_pass
    }
    let body = JSON.stringify(params);
    this.participantsService.loginParticipant(body).subscribe((response: any) => {
      if (response.header.code == 200) {
        //console.log(response.data[0].hash_participant);
        localStorage.setItem("hash_participant", response.data[0].hash_participant);
        localStorage.setItem("isLoggedIn", "true");
        this.router.navigate(['/home']);
        this.dialog.closeAll();
      } else {
        this.comonAlerts.showWarnning(response.header.message)
      }
    }, (error) => {
      this.comonAlerts.showToastError(error)
    });
  }

}
