import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CookieService } from '../shared/services';
import { Router } from '@angular/router';
import { AppState } from '../app.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted: boolean;
  isLogging: boolean;
  copyRightText = environment.copyRightText;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private cookieService: CookieService,
    private appState: AppState
  ) {}

  ngOnInit() {
    this.appState.set('isAuthenticated', false);
    this.appState.authEvent.emit(false);
    this.cookieService.set('sessionToken', '');
    this.createLoginForm();
  }
  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  submitLoginForm() {
    this.isSubmitted = true;
    this.isLogging = true;
    if (this.loginForm.valid) {
      this.appState.authEvent.emit(true);
      this.appState.set('isAuthenticated', true);
      setTimeout(() => {
        this.isLogging = false;
        this.router.navigateByUrl('dashboard');
      }, 100);
    } else {
      this.isLogging = false;
    }
  }
}
