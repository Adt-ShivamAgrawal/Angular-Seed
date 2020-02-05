import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { AppState } from 'src/app/app.service';
import { CookieService } from './cookie.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate, CanActivateChild {
  constructor(
    private appState: AppState,
    private router: Router,
    private cookieService: CookieService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> | boolean {
    const url: string = state.url;
    return this.isUserAuthenticated(route, url);
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }

  isUserAuthenticated(
    route: ActivatedRouteSnapshot,
    url: string
  ): Promise<boolean> | boolean {
    // const sessionToken = this.cookieService.get('sessionToken') || '';
    // if (sessionToken) {
    //   this.appState.set('isAuthenticated', true);
    //   this.appState.authEvent.emit(true);
    //   return true;
    // } else {
    //   this.appState.authEvent.emit(false);
    //   this.router.navigate(['/login']);
    //   return false;
    // }
    this.appState.set('isAuthenticated', true);
    this.appState.authEvent.emit(true);
    return true;
  }
}
