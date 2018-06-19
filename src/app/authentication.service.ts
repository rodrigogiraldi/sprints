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

  login(user: User):boolean{
    if (user.username == 'test' && user.password =='123'){
      this.logged = true;
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
}
