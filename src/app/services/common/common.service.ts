import { Injectable } from '@angular/core';
import { HttpHeaders } from "@angular/common/http";
import { environment } from '../../../environments/environment';

@Injectable()
export class CommonService {
  server = environment.server;
  imagesJudges = 'http://10.31.123.214/olympics_backend_node/files/images/judges/';
  imagesFlags = 'http://10.31.123.214/olympics_backend_node/files/images/flags/';
  imagesEvidence = 'http://10.31.123.214/olympics_backend_node/files/evidence/';
  imagesProfile = 'http://10.31.123.214/olympics_backend_node/files/profile_picture/';
  imagesTeams = 'http://10.31.123.214/olympics_backend_node/files/images/teams/';
  encript = "CXAWellnessGames2021";
  constructor() { }

  getHeadersNew() {
    let httpHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Headers', 'Content-Type')
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization', 'Basic YWRtaW5jeGFvbHltcGljZ2FtZXMyMDIxOmFkbWluY3hhb2x5bXBpY2dhbWVzMjAyMURldmVsb3BBbWVkaXQyMDIx')
      .set('Content-Type', 'application/json');
    let options = {
      headers: httpHeaders
    };
    return options;
  }

  getHeadersFormData() {
    let httpHeaders = new HttpHeaders()
      .set('Authorization', 'Basic YWRtaW5jeGFvbHltcGljZ2FtZXMyMDIxOmFkbWluY3hhb2x5bXBpY2dhbWVzMjAyMURldmVsb3BBbWVkaXQyMDIx')
      .set('Access-Control-Allow-Origin', '*');
    let options = {
      headers: httpHeaders
    };
    return options;
  }
}
