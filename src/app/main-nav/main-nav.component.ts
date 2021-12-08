import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare var $: any
@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  @ViewChild('home', { read: ElementRef, static: false }) homeData: ElementRef;
  constructor() { }

  ngOnInit() {
    $('#logoColor').css('display','none');
    $(document).on("scroll", function () {
      
      if($(document).scrollTop() > 30) {
        $("#banner").addClass("nav_color");
        $('#logoBlanco').css('display','none');
        $('#logoColor').css('display','block');
      }
      else {
        $("#banner").removeClass("nav_color");
        $('#logoBlanco').css('display','block');
        $('#logoColor').css('display','none');
      }
    });


  }
  

  removeClass() {
    //this.homeData.nativeElement.classList.remove('link_active')
  }

  addClassActive() {
    this.homeData.nativeElement.classList.add('link_active')
  }

}
