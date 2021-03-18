import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import {AuthenticationService} from './authentication.service'

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private _auth : AuthenticationService ){

  }
  canActivate():boolean{
    if(this._auth.isAuthenticated){
      return true;
    }
      return false;

  }
  
}
