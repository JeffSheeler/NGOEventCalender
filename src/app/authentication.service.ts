import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthenticationService {

  constructor(private jwtHelper:JwtHelperService) { }

  isAuthenticated():boolean{
    let token = localStorage.getItem("token");
    return this.jwtHelper.isTokenExpired(token);
  }

  isAdmin():boolean{
    let token = localStorage.getItem("token");
    console.log(token)
    let payload = atob(token.split('\.')[1]);
    let user = JSON.parse(payload);
    if(user.role == "admin"){
      return true;
    }
    return false;
  }
}
