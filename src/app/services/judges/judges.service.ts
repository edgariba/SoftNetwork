import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CommonAlertsService } from '../common/common-alerts.service';
import { CommonService } from '../common/common.service';

@Injectable({
  providedIn: 'root'
})
export class JudgesService {

  constructor(public httpClient: HttpClient, private commonService: CommonService, private handleErrors: CommonAlertsService) { }

  getAllJudges(): Observable<any> {
    return this.httpClient.get(this.commonService.server + "admins", this.commonService.getHeadersNew()).pipe(
      catchError(this.handleErrors.handleError)
    );
  }

}
