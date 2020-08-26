import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private reg_url = "http://localhost:3000/user/register";
  private login_url = "http://localhost:3000/user/login";

  constructor(private http : HttpClient,private router : Router) { }

  registerUserService(user: any){
    return  this.http.post<any>(this.reg_url,user);
  }

  loginUserService(user: any){
    return  this.http.post<any>(this.login_url,user);
  }

  loggedInSer(){
    return !!localStorage.getItem('token');
  }

  logOutSer(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getToken(){
    console.log(localStorage.getItem('token'));
    return localStorage.getItem('token');
  }


}
