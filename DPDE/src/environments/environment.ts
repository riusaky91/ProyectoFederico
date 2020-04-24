// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyDi5McQq2tijHZisTXATiczmQVJ-4LCEJs",
    authDomain: "dpde-90f22.firebaseapp.com",
    databaseURL: "https://dpde-90f22.firebaseio.com",
    projectId: "dpde-90f22",
    storageBucket: "dpde-90f22.appspot.com",
    messagingSenderId: "133380080181",
    appId: "1:133380080181:web:78bf61d69a463e3f93a77c",
    measurementId: "G-EDBQF0XW3S"
  }


};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
