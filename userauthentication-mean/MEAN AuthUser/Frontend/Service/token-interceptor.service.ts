import { Injectable } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import { AuthService } from "Service/auth.service";
@Injectable({
  providedIn: 'root'
})

export class TokenInterceptorService implements HttpInterceptor {
  
  constructor(private authservice : AuthService) { }

  intercept(req: any,next: any){
    let tokenreq = req.clone({
      setHeaders :{
        Authorization : `Bearer ${this.authservice.getToken()} ` 
      }
    })
    
    return next.handle(tokenreq)
  }
}
