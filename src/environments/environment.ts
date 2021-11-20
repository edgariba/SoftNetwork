// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/* export const environment = {
  production: false,
  server: 'https://amedit.space:8081/' + 'api/v1/',
  imagesJudges: 'https://amedit.space/pruebas/olympic_backend/files/images/judges/',
  imgagesFlags: 'https://amedit.space/pruebas/olympic_backend/files/images/flags/',
  filesEvidence: 'https://amedit.space/pruebas/olympic_backend/files/evidence/',
  imagesProfile: 'https://amedit.space/pruebas/olympic_backend/files/profile_picture/',
  imagesTeams: 'https://amedit.space/pruebas/olympic_backend/files/images/teams/'
}; */

export const environment = {
  production: false,
  //server: 'http://localhost:8081/' + 'api/v1/'
  server: 'http://10.31.123.214:8081/' + 'api/v1/'
  //server: 'https://amedit.space:8081/' + 'api/v1/'

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
