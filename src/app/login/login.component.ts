import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  wrongPassword: boolean;

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.user = new User();
  }

  login() {
    this.authenticationService.login(this.user);

    if (this.authenticationService.isLoggedin()){
      this.router.navigate(['/']);
    }
    else{
      this.wrongPassword = true;
    }
  }
}
