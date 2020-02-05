import { Injectable } from '@angular/core';
import { LoginRequest} from '../model/auth.model';
import { HttpService } from './http.service';
import { API_URLS } from '../constants/api-urls.constant';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpService: HttpService) {}

  login(
    reqObj: LoginRequest,
    successCB: (data: any) => void,
    errorCB: (err: any) => void
  ) {
    this.httpService
      .makeHttpPostRequestWithOutToken(API_URLS.login, reqObj)
      .subscribe(
        res => {
          successCB(res.body);
        },
        err => {
          errorCB(err);
        }
      );
  }
  logout(successCB: (data: any) => void, errorCB: (err: any) => void) {
    this.httpService.makeHttpDeleteRequest(API_URLS.logout).subscribe(
      res => {
        successCB(res.body);
      },
      err => {
        errorCB(err);
      }
    );
  }
}
