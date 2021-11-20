import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { JudgesService } from 'src/app/services/judges/judges.service';
import { CommonAlertsService } from 'src/app/services/common/common-alerts.service';
import { Judges } from 'src/app/classes/interfaces';
import { CommonService } from 'src/app/services/common/common.service';

@Component({
  selector: 'app-judges',
  templateUrl: './judges.component.html',
  styleUrls: ['./judges.component.scss']
})
export class JudgesComponent implements OnInit {

  judgesArray: Judges[] = [];
  imageJudge: String;
  public headerClasses;
  currentHead: String = "head-blue";
  lastHead: String = "head-green";

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor( 
    private breakpointObserver: BreakpointObserver, 
    private judgesService: JudgesService, 
    private comonAlerts: CommonAlertsService,
    private apiConfig: CommonService ) {
      this.imageJudge = this.apiConfig.imagesJudges;
    }

  ngOnInit(): void {
    this.getAllJudges();
  }

  color(i){
    while (i > 3) {
      i = i - 4;
    }
    return "head-"+i;
  }

  getAllJudges(){

    this.judgesService.getAllJudges().subscribe(
      (response) => {
        if (response.header.code == 200){
          this.judgesArray = response.data
        } else{
          this.comonAlerts.showWarnning(response.header.message)
        }
      }, (error) => {
        this.comonAlerts.showToastError(error)
      } 
    )
  }
  

}
