import { HttpHeaders } from '@angular/common/http';
import { ENVIRONMENT } from '../../environments/environment';
import { AppSettings } from 'src/app/config/app.config';

// Interfaces
export interface CustomHttpHeaderOptions {
  loader?: boolean;
  errorMessage?: boolean;
  token?: boolean;
  X_Lang?: boolean;
  teaApp?: boolean;
  cartInstance?: boolean;
  additionalParams?: Array<{ name: string; value: string }>;
}
export interface HTTPRESPONSE {
  code: string | number;
  data?: any;
  status?: string;
  message?: string;
  responseStatus: string;
  responseCode: number;
  object: any;
}
export interface APIOptions {
  protocol: string;
  host: string;
  port: string;
  trailUrl: string;
  hostUrl: string;
}
export type Boolean_number_range = 0 | 1;

export class HttpHelper {
  protected apiUrl: String = '';
  protected payUrl: String = '';
  getState = null;
  static userInfo = null;

  constructor() {
    this.apiUrl = ENVIRONMENT.API_ENDPOINT;
    this.payUrl = ENVIRONMENT.Pay_ENDPOINT;
  }

  // getHttpOptions
  protected getHttpOptions(
    options?: CustomHttpHeaderOptions,
  ): { headers: HttpHeaders } {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', localStorage.getItem(AppSettings.localStorage_keys.token) || 'Bearer ');
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('ipAddress', ENVIRONMENT.API.host);
    headers = headers.append('x-ecomm-org', 'tea-app');
    if (options && options.loader === false) {
      headers = headers.append('InterceptorNoLoader', '');
    }

    if (options && options.errorMessage === false) {
      headers = headers.append('InterceptorNoErrorMessage', '');
    }

    if (options && options.token === false) {
      headers = headers.delete('Authorization');
    }

    if (options && options.cartInstance === true) {
      headers = headers.append('cartInstance', localStorage.getItem(AppSettings.localStorage_keys.cartInstance));
    }
  
    if (options && options.hasOwnProperty('additionalParams')) {
      options.additionalParams.map(param => {
        headers = headers.append(param.name, param.value);
      });
    }

    const httpOptions = {
      headers: headers,
    };

    return httpOptions;
  }
}
