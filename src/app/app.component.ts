import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService, private router: Router){  }

  ngOnInit(){
    
  }

  logout() {
    this.authenticationService.logout();
    if (!this.loggedIn){
      this.router.navigate(['/']);
    }
  }
  
  get loggedIn(){
    return this.authenticationService.isLoggedin();
  }

  get username():string{
    return this.authenticationService.getUsername();
  }
}
