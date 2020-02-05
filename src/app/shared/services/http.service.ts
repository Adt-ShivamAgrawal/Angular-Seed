import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { CookieService } from './cookie.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient, private cookieService: CookieService) {}

  public makeHttpPostRequest(url: string, data?: any, params?: any) {
    return this.makeHttpRequest(url, 'POST', data, params, true);
  }
  public makeHttpGetRequest(url: string, data?: any, params?: any) {
    return this.makeHttpRequest(url, 'GET', data, params, true);
  }
  public makeHttpDeleteRequest(url: string, data?: any, params?: any) {
    return this.makeHttpRequest(url, 'DELETE', data, params, true);
  }
  public makeHttpPostRequestWithOutToken(
    url: string,
    data?: any,
    params?: any
  ) {
    return this.makeHttpRequest(url, 'POST', data, params, false);
  }
  private makeHttpRequest(
    url: string,
    requestMethod: string,
    data?: any,
    params?: any,
    needToken?: boolean
  ) {
    url = environment.apiUrl + url;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      body: '',
      responseType: 'json' as 'json',
      observe: 'response' as 'response'
    };
    // requestOptions['headers'] = new HttpHeaders({ 'Content-Type': 'application/json' });
    // if token needs for request then this block get user access token from cookies and add into Headers class properties
    if (needToken) {
      const sessionData = this.cookieService.get('sessionToken');
      if (sessionData) {
        httpOptions.headers = httpOptions.headers.append(
          'sessionToken',
          sessionData
        );
      }
    }
    if (data) {
      if (requestMethod !== 'GET') {
        httpOptions.body = data;
        if (params) {
          httpOptions['params'] = this.getParams(params);
        }
      } else {
        // requestOptions.clone({params:params});
        httpOptions['params'] = this.getParams(data);
      }
    }

    // let requestOptions: HttpRequest<any> = new HttpRequest(
    //   requestMethod,
    //   url,
    //   httpOptions
    // );
    return this.http.request(requestMethod, url, httpOptions);
  }
  getParams(data) {
    let params = new HttpParams();
    // data should be a JSON object having 'key' must be 'string' and 'value' should not be an 'object/array'
    for (const key in data) {
      if (
        typeof data[key] === 'boolean' ||
        typeof data[key] === 'number' ||
        typeof data[key] === 'string'
      ) {
        params = params.append(key, data[key].toString());
      }
    }
    return params;
  }
}
