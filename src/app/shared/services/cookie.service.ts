import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {
  public set(cookieName: any, cookieValue: any, days?: any, rememberMe?: any) {
    if (this.get(cookieName)) {
      this.remove(cookieName);
    }
    if (rememberMe) {
      const expires = new Date();
      const exp = expires.getTime() + (days ? days : 30) * 24 * 60 * 60 * 1000;
      expires.setTime(exp);
      document.cookie =
        cookieName +
        '=' +
        cookieValue +
        '; ' +
        'expires=' +
        expires +
        '; path=/';
    } else {
      document.cookie = cookieName + '=' + cookieValue + '; path=/';
    }
  }
  public get(cookieName: any) {
    const cookies: any = document.cookie.split(';');
    const length: number = cookies.length;
    let cookieValue: any;
    for (let i = 0; i < length; i++) {
      const index = cookies[i].indexOf(cookieName);
      if (index > -1) {
        cookieValue = cookies[i].split('=')[1];
        cookieValue = cookieValue;
        break;
      }
    }
    return cookieValue;
  }
  public remove(cookieName: any) {
    document.cookie =
      cookieName + '=; ' + 'expires=Thu, 01 Jan 1970 00:00:00 GMT';
    if (this.get(cookieName) === '') {
      return true;
    }
    return false;
  }
  public getAll() {
    const cookies: any = document.cookie.split(';');
    return cookies;
  }
  public removeAll() {
    const cookies: any = this.getAll();
    const length: number = cookies.length;
    for (let i = 0; i < length; i++) {
      const cookieName = cookies[i].split('=')[0];
      this.remove(cookieName);
    }
    if (document.cookie.length === 0) {
      return true;
    }
    return false;
  }
}
