import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isLoading = false;
  constructor(private router: Router, private toastr: ToastrService) {}

  ngOnInit() {}

  showLoading() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
  showSuccessToaster() {
    this.toastr.success('Success!', 'some message!');
  }
  showErrorToaster() {
    this.toastr.error('Error!', 'some message!');
  }
}
