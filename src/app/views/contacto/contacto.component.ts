import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { NgxSpinnerService } from 'ngx-spinner';
declare var $: any
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})

export class ContactoComponent implements OnInit {

  myForm: FormGroup;
  submitted = false;


  constructor(public fb: FormBuilder, private http: HttpClient, private renderer: Renderer2, private spinner: NgxSpinnerService, public toastr: ToastrManager) {

    this.renderer.setStyle(document.body, 'background-color', 'black');
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.minLength(10), Validators.pattern('[0-9 ]*')]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {    
    this.playVideo()
  }

  playVideo() {
    let audioPlayer = <HTMLVideoElement>document.getElementById('background-video');
    audioPlayer.muted = true
  }

  
  get f() {
    return this.myForm.controls;
  }

  saveData() {
    this.submitted = true;
    if (this.myForm.invalid) {
      return;
    }
    this.spinner.show()
    let httpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*');
    let options = {
      headers: httpHeaders
    };
    let formData: FormData = new FormData();
    formData.append('nombre', this.myForm.value.name);
    formData.append('asunto', this.myForm.value.subject);
    formData.append('email', this.myForm.value.email);
    formData.append('telefono', this.myForm.value.mobile);
    formData.append('mensaje', this.myForm.value.message);

    this.http.post<any>("https://www.tecmhi.mx/api/sendMail.php", formData).subscribe(
      (data: any) => {
        this.spinner.hide();
        this.showError()
      },
      (err) => {
        var texto = err.error.text;
        if (texto.startsWith("El")) {
          this.showSuccess()
          this.cleanData();
          this.spinner.hide()
        } else if (texto.startsWith("Hubo")) {
          this.showError()
          this.spinner.hide()
        }
      });
  }

  cleanData() {
    $('#modalContactForm').modal('hide');
    this.submitted = false
    this.myForm.get('name').setValue('');
    this.myForm.get('email').setValue('');
    this.myForm.get('mobile').setValue('');
    this.myForm.get('subject').setValue('');
    this.myForm.get('message').setValue('');
  }

  showSuccess() {
    this.toastr.successToastr('Se envio exitosamente el correo, en breve nos pondremos en contacto con usted.', 'Éxito!');
  }

  showError() {
    this.toastr.errorToastr('Ocurrio un error al enviar el correo, intenta de nuevo.', 'Oops!');
  }

}
