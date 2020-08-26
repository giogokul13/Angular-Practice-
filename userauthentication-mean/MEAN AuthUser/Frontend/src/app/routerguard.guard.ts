import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import {AuthService} from 'Service/auth.service'

@Injectable({
  providedIn: 'root'
})
export class RouterguardGuard implements CanActivate {

  constructor(private router : Router ,private auth : AuthService){}
  canActivate(): boolean{
    if(this.auth.loggedInSer()){
      return true;
    }
    else{
      this.router.navigate(['/login']);
    }
  }
  
}
