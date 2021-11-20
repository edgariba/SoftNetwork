import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CommonAlertsService } from '../common/common-alerts.service';
import { CommonService } from '../common/common.service';


@Injectable({
  providedIn: 'root'
})
export class LeaderbordService {

  constructor(public httpClient: HttpClient, private commonService: CommonService, private handleErrors: CommonAlertsService) { }

  getLeaderboard(): Observable<any> {
    return this.httpClient.get(this.commonService.server + "leaderboard", this.commonService.getHeadersNew()).pipe(
      catchError(this.handleErrors.handleError)
    );
  }

}
