import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
declare var $: any
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})

export class ContactoComponent implements OnInit {

  myForm: FormGroup;
  submitted = false;
  lat: number = 20.585018;
  lng: number = -100.367691;
  latTas: number = 20.556506;
  lngTas: number = -99.305987;
  zoom: number = 16;

  textoOk = 'El correo fue enviado correctamente.';


  constructor(public fb: FormBuilder, private http: HttpClient, private renderer: Renderer2) {
    
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
    
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.myForm.controls;
  }

  saveData() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.myForm.invalid) {
      return;
    }
    //this.spinnerService.show();
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

    this.http.post<any>("https://www.softcrud.com/api/sendMail.php", formData).subscribe(
      (data: any) => {
        //this.spinnerService.hide();
        $('#myModalFullError').modal('show');
      },
      (err) => {
        var texto = err.error.text;
        if (texto.startsWith("El")) {   
          $('#myModalFull').modal('show');
          this.cleanData();
          //this.spinnerService.hide();                  
        } else if(texto.startsWith("Hubo")){
          $('#myModalFullError').modal('show');
          //this.spinnerService.hide();
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

}
