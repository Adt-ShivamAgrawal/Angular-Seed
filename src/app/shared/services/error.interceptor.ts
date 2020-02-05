import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppState } from 'src/app/app.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private appState: AppState
  ) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          const res = event.body;
          if (res.code === 401 && this.appState.state.isAuthenticated) {
            this.appState.set('isAuthenticated', false);
            this.showError();
            setTimeout(() => {
              this.router.navigateByUrl('/login');
            }, 100);
          }
          return;
        }
        return;
      })
    );
  }
  showError() {
    this.toastr.error('Session Expired!', 'Please login again!');
  }
}
