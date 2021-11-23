import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  images: any[] = ["./assets/img/softnet/redes.jpg", "./assets/img/softnet/software.jpg"]
  @ViewChild("imageInit") imageInit: ElementRef;
  timer = null
  indice = 0

  constructor() { }

  ngOnInit(): void {
    var that = this
    this.timer = setInterval(() => {
      this.indice++
      if (that.images.length == this.indice) {
        this.indice = 0
      }
      //that.imageInit.nativeElement.classList.remove('animate__animated');
     /*  that.imageInit.nativeElement.classList.remove('animate__slideInUp');
      that.imageInit.nativeElement.classList = 'animate__slideInUp';
      that.imageInit.nativeElement.src = that.images[i]; */
    }, 3000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

}
