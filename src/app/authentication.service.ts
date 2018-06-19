import { Injectable } from '@angular/core';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private logged:boolean;
  private user: User;

  constructor() {
    // this.logged = false;
   }

  login(user: User):boolean{
    if (user.username == 'testuser@email.com' && user.password =='123'){
      this.logged = true;
      this.user = user;
      return true;
    }
    else{
      return false;
    }
  }

  logout(){
    this.logged = false;
  }

  isLoggedin():boolean{
    return this.logged;
  }

  getUsername():string{
    return this.user.username;
  }
}
