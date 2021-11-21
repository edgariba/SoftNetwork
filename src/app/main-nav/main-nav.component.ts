import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  @ViewChild('home', { read: ElementRef, static: false }) homeData: ElementRef;
  constructor() { }

  ngOnInit() {
    
  }

  removeClass() {
    //this.homeData.nativeElement.classList.remove('link_active')
  }

  addClassActive() {
    this.homeData.nativeElement.classList.add('link_active')
  }

}
