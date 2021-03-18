import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationService} from './authentication.service';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private auth:AuthenticationService){

  }

  canActivate(): boolean{
    if(this.auth.isAdmin){
      return true;
    }

      
    
    return false;
  }
  
}
