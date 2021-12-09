import { Component, OnInit } from '@angular/core';
declare var $:any
@Component({
  selector: 'app-services-principales',
  templateUrl: './services-principales.component.html',
  styleUrls: ['./services-principales.component.scss']
})
export class ServicesPrincipalesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(function() {
      $('.carousel').carousel({
        interval: 3000,
        cycle: true
      });
      $('[data-slide-to=0]').trigger('click');
    });
  }

}
