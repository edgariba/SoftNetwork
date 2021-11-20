import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CommonService } from '../common/common.service';
import { CommonAlertsService } from '../common/common-alerts.service';

@Injectable({
  providedIn: 'root'
})
export class EvidencesService {

  constructor(public httpClient: HttpClient, private commonService: CommonService, private handleErrors: CommonAlertsService) { }

  addEvidencePhoto(body: FormData, hash_participant: String, hash_activity: String): Observable<any> {
    return this.httpClient.post(this.commonService.server + "evidence/photo?hash_participant=" + hash_participant + "&hash_activity=" + hash_activity, body, this.commonService.getHeadersFormData()).pipe(
      catchError(this.handleErrors.handleError)
    );
  }

  addEvidenceVideo(body: FormData, hash_participant: String, hash_activity: String): Observable<any> {
    return this.httpClient.post(this.commonService.server + "evidence/video?hash_participant=" + hash_participant + "&hash_activity=" + hash_activity, body, this.commonService.getHeadersFormData()).pipe(
      catchError(this.handleErrors.handleError)
    );
  }

  getFirstPlacesByKilometers(hashActivity: any): Observable<any> {
    return this.httpClient.get(this.commonService.server + "evidence/getFirstPlacesKilometers/" + hashActivity, this.commonService.getHeadersNew()).pipe(
      catchError(this.handleErrors.handleError)
    );
  }

  getFirstPlacesByKilometersByTeam(hashActivity: any): Observable<any> {
    return this.httpClient.get(this.commonService.server + "evidence/getFirstPlacesTeamKilometers/" + hashActivity, this.commonService.getHeadersNew()).pipe(
      catchError(this.handleErrors.handleError)
    );
  }

  getFirstPlacesByTime(hashActivity: any): Observable<any> {
    return this.httpClient.get(this.commonService.server + "evidence/getFirstPlacesByTime/" + hashActivity, this.commonService.getHeadersNew()).pipe(
      catchError(this.handleErrors.handleError)
    );
  }

  getFirstPlacesByQuantityActions(hashActivity: any): Observable<any> {
    return this.httpClient.get(this.commonService.server + "evidence/getFirstPlacesByQuantity/" + hashActivity, this.commonService.getHeadersNew()).pipe(
      catchError(this.handleErrors.handleError)
    );
  }

  getFirstPlacesByRepetitionsOrPoints(hashActivity: any): Observable<any> {
    return this.httpClient.get(this.commonService.server + "evidence/getFirstPlacesByRepetitionsOrPoints/" + hashActivity, this.commonService.getHeadersNew()).pipe(
      catchError(this.handleErrors.handleError)
    );
  }

  getEvidenceGallery(): Observable<any> {
    return this.httpClient.get(this.commonService.server + "evidence/getEvidenceGallery", this.commonService.getHeadersNew()).pipe(
      catchError(this.handleErrors.handleError)
    );
  }

}
