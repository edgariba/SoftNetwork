import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CountriesService } from '../../services/countries/countries.service';
import { ParticipantsService } from '../../services/participants/participants.service';
import { CommonAlertsService } from '../../services/common/common-alerts.service';
import { Country, Participant } from '../../classes/interfaces';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import * as CryptoJS from 'crypto-js';
import { CommonService } from 'src/app/services/common/common.service';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.scss']
})
export class RegisterDialogComponent implements OnInit {
  countries: Country[] = [];
  formParticipant: FormGroup;

  constructor( private countriesService: CountriesService, private participantsService: ParticipantsService, 
    private comonAlerts: CommonAlertsService, private fb: FormBuilder, private apiConfig: CommonService,
    public dialogRef: MatDialogRef<RegisterDialogComponent>
  ) { 
    this.formParticipant = this.fb.group({
      name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],  
      email: ['@cisco.com', [Validators.required]],  
      password: ['', [Validators.required]],
      hash_country: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.getAllCountries()
  }

  getAllCountries(){
    this.countriesService.getAllCountries().subscribe(
      (response) => {
        if (response.header.code == 200){
          this.countries = response.data;
        } else{
          this.comonAlerts.showWarnning(response.header.message)
        }
      }, (error) => {
        this.comonAlerts.showToastError(error)
      } 
    )
  }

  cancel(){
    this.dialogRef.close();
  }

  registerParticipant(){
    if (!this.formParticipant.valid) {
      return;
    }
    var encrypted_pass = CryptoJS.AES.encrypt(this.formParticipant.value.password,this.apiConfig.encript).toString();
    var params = {
      name: this.formParticipant.value.name,
      last_name: this.formParticipant.value.last_name,
      email: this.formParticipant.value.email,
      password: encrypted_pass,
      hash_country: this.formParticipant.value.hash_country
    }
    let body = JSON.stringify(params);
    this.participantsService.addParticipant(body).subscribe((response: any) => {
      if (response.header.code == 200) {
        this.dialogRef.close();
        this.comonAlerts.showSuccess(response.header.message)
      } else {
        this.comonAlerts.showWarnning(response.header.message)
      }
    }, (error) => {
      this.comonAlerts.showToastError(error)
    });
  }

}
