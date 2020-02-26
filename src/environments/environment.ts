// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// export const environment = {
//   production: false
// };

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { APIOptions } from '../app/helpers/http-helper.class';

// tea local
// const protocol = 'http';
// const host = 'localhost';
// const port = '4001';
// const trailUrl = 'api';
// const payUrl = 'pay';

// const hostUrl = `${protocol}://${host}${port ? ':' + port : ''}`;
// const endpoint = `${hostUrl}/${trailUrl}`;
// // const endpoint = `http://35.232.130.57/${trailUrl}`;
// const payendpoint = `http://35.232.130.57/${payUrl}`;

// const host = 'api.ecomm.conaug.com';



const protocol = 'https';
const host = 'groceryapp.conaug.com';
const port = '';
const trailUrl = 'api';
const payUrl = 'pay';

const hostUrl = `${protocol}://${host}${port ? ':' + port : ''}`;
const endpoint = `${hostUrl}/${trailUrl}`;
const payendpoint =  `${hostUrl}/${payUrl}`;


// const protocol = 'http';
// const host = 'localhost';
// const port = '4000';
// const trailUrl = 'api';
// const payUrl = 'pay';

// const hostUrl = `${protocol}://${host}${port ? ':' + port : ''}`;
// const endpoint = `${hostUrl}/${trailUrl}`;
// // const endpoint = `http://35.232.130.57/${trailUrl}`;
// const payendpoint = `http://35.232.130.57/${payUrl}`;


export const ENVIRONMENT = {
  production: false,
  // tslint:disable-next-line: no-angle-bracket-type-assertion
  API: <APIOptions>{
    // tslint:disable-next-line: object-literal-shorthand
    protocol: protocol,
    // tslint:disable-next-line: object-literal-shorthand
    host: host,
    // tslint:disable-next-line: object-literal-shorthand
    port: port,
    // tslint:disable-next-line: object-literal-shorthand
    trailUrl: trailUrl,
    // tslint:disable-next-line: object-literal-shorthand
    hostUrl: hostUrl,
  },
  API_ENDPOINT: endpoint,
  Pay_ENDPOINT: payendpoint,
  // stripeKey: 'pk_test_JUeNhWSwK3XbhChuKtAqZsdd00oVL62BWl',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

