import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CommonAlertsService } from '../common/common-alerts.service';
import { CommonService } from '../common/common.service';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  constructor(public httpClient: HttpClient, private commonService: CommonService, private handleErrors: CommonAlertsService) { }

  getEvidenceByActivity(hashActivity: any, page: any, limit: any): Observable<any> {
    return this.httpClient.get(this.commonService.server + "evidence/getByActivity/" + hashActivity +"?page=" + page + "&limit=" + limit, this.commonService.getHeadersNew()).pipe(
      catchError(this.handleErrors.handleError)
    );
  }

  getEvidenceByParticipant(hash_participant: String): Observable<any> {
    return this.httpClient.get(this.commonService.server + "evidence/getByParticipant/" + hash_participant, this.commonService.getHeadersNew()).pipe(
      catchError(this.handleErrors.handleError)
    );
  }

  getEvidenceByParticipantActivity(json: any): Observable<any> {
    return this.httpClient.post(this.commonService.server + "evidence/getByActivityAndParticipant/", json, this.commonService.getHeadersNew()).pipe(
      catchError(this.handleErrors.handleError)
    );
  }
}
