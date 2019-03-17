import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  returnUrl: string;
  hide = true;
  errorMessage = 'Username or password is incorrect';
  errorMessageIcon = 'warnig';
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
     // get return url from route parameters or default to '/'
     this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  getErrorMsgUsername() {
    return this.username.hasError('required') ? 'Username is required' : '';
  }

  getErrorMsgPassword() {
    return this.password.hasError('required') ? 'Password is required' : '';
  }

  login() {
    // this.router.navigate([this.returnUrl]);
    this.router.navigate(['/home']);
  }

}
