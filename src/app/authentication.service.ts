import { Injectable } from '@angular/core';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private logged:boolean;

  constructor() {
    this.logged = true;
   }

  login(user: User){
    if (user.username == 'test' && user.password =='123'){
      this.logged = true;
      console.log("logged");
    }
    else{
      console.log("wrong credentials");
    }
  }

  logout(){
    this.logged = false;
    console.log("loggedout");
  }

  isLoggedin():boolean{
    return this.logged;
  }
}
