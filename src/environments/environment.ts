// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // Initialize Firebase
  firebase: {
    apiKey: "AIzaSyDj6o9DSUv43H1Q9BO6qdEPffNhXeuxo3s",
    authDomain: "angular-one-piece.firebaseapp.com",
    databaseURL: "https://angular-one-piece.firebaseio.com",
    projectId: "angular-one-piece",
    storageBucket: "angular-one-piece.appspot.com",
    messagingSenderId: "490026925696"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
