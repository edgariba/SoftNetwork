import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CommonService } from '../common/common.service';
import { CommonAlertsService } from '../common/common-alerts.service';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(public httpClient: HttpClient, private commonService: CommonService, private handleErrors: CommonAlertsService) { }

  getAllCountries(): Observable<any> {
    return this.httpClient.get(this.commonService.server + "country", this.commonService.getHeadersNew()).pipe(
      catchError(this.handleErrors.handleError)
    );
  }

}
