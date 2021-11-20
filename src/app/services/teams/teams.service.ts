import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CommonService } from '../common/common.service';
import { CommonAlertsService } from '../common/common-alerts.service';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(public httpClient: HttpClient, private commonService: CommonService, private handleErrors: CommonAlertsService) { }

  getTeamByParticipantHash(hash_participant: String): Observable<any> {
    return this.httpClient.get(this.commonService.server + "teams/participant/inside/" + hash_participant, this.commonService.getHeadersNew()).pipe(
        catchError(this.handleErrors.handleError)
    );
  }

  addTeam(body: FormData, hash_activity: String, hash_participant: String): Observable<any> {
    return this.httpClient.post(this.commonService.server + "teams/add?hash_activity="+hash_activity+"&hash_participant="+hash_participant, body, this.commonService.getHeadersFormData()).pipe(
      catchError(this.handleErrors.handleError)
    );
  }

  getTeamByHash(hash_team: String): Observable<any> {
    return this.httpClient.get(this.commonService.server + "teams/" + hash_team, this.commonService.getHeadersNew()).pipe(
        catchError(this.handleErrors.handleError)
    );
  }

  addParticipantToTeam(json: any): Observable<any> {
    return this.httpClient.post(this.commonService.server + "teams/addParticipant", json, this.commonService.getHeadersNew()).pipe(
      catchError(this.handleErrors.handleError)
    );
  }

  deleteParticipantFromTeam(json: any): Observable<any> {
    return this.httpClient.post(this.commonService.server + "teams/deleteParticipant", json, this.commonService.getHeadersNew()).pipe(
      catchError(this.handleErrors.handleError)
    );
  }

}
