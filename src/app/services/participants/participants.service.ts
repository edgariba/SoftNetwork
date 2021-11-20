import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CommonService } from '../common/common.service';
import { CommonAlertsService } from '../common/common-alerts.service';

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {

  constructor(public httpClient: HttpClient, private commonService: CommonService, private handleErrors: CommonAlertsService) { }

  addParticipant(json: any): Observable<any> {
    return this.httpClient.post(this.commonService.server + "participants/register", json, this.commonService.getHeadersNew()).pipe(
      catchError(this.handleErrors.handleError)
    );
  }

  loginParticipant(json: any): Observable<any> {
    return this.httpClient.post(this.commonService.server + "participants/login", json, this.commonService.getHeadersNew()).pipe(
      catchError(this.handleErrors.handleError)
    );
  }

  getParticipantByHash(hash_participant: String): Observable<any> {
      return this.httpClient.get(this.commonService.server + "participants/" + hash_participant, this.commonService.getHeadersNew()).pipe(
          catchError(this.handleErrors.handleError)
      );
  }

  searchParticipant(serachText: String): Observable<any> {
    return this.httpClient.get(this.commonService.server + "participants/search/" + serachText, this.commonService.getHeadersNew()).pipe(
        catchError(this.handleErrors.handleError)
    );
  }

}
