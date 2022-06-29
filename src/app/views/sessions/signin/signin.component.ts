import { AuthService } from './../../../shared/services/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatButton } from '@angular/material/button';
import { ToastrService } from 'ngx-toastr';
import { AppLoaderService } from 'app/shared/services/app-loader/app-loader.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  @ViewChild(MatProgressBar, { static: false }) progressBar: MatProgressBar;
  @ViewChild(MatButton, { static: false }) submitButton: MatButton;

  signinForm: FormGroup;
  credentials = {
    email: '',
    password: '',

  };
  isLoading: boolean = false;
  userData: any = {};
  show: boolean = true;
  constructor(
    private router: Router,
    private toast: ToastrService,
    private authservice: AuthService,
    private loader: AppLoaderService,

  ) { }

  logIn() {
    if (this.credentials.email) {
      let email = this.credentials.email.toLowerCase();
      this.credentials.email = email;
    }


    localStorage.removeItem('token');
    this.loader.open();
    this.authservice.login(this.credentials).subscribe((res: any) => {
      this.userData = res;
      this.loader.close();
      if (this.userData.isSuccess === true) {
        this.toast.success('Successfully LoggedIn')
        this.router.navigate(['dashboard/analytics']);
      }
      else {
        this.toast.error(res.error)
        return this.isLoading = false;
      };
      this.loader.close();
    });

  }


  ngOnInit() {
    this.signinForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      rememberMe: new FormControl(false)
    });
  }

}
