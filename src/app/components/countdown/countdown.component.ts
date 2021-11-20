import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent {

  public endDate: any = new Date("august 8, 2021 23:59:00");
  public days: any;
  public hours: any;
  public minutes: any;
  public seconds: any;
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

  countdown = setInterval(() =>{
    var now = new Date().getTime();
    var difference = this.endDate - now;
    var d = Math.floor(difference/(1000*60*60*24));
    var h = Math.floor((difference % (1000*60*60*24))/(1000*60*60));
    var m = Math.floor((difference % (1000*60*60))/(1000*60));
    var s= Math.floor((difference %(1000*60))/1000);
    this.days = d;
    this.hours = h;
    this.minutes = m;
    this.seconds = s;
  })

}
