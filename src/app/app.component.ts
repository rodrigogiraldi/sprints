import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private authenticationService: AuthenticationService){  }

  ngOnInit(){
  }

  logout() {
    this.authenticationService.logout();
  }
  
  get loggedIn(){
    return this.authenticationService.isLoggedin();
  }
}
