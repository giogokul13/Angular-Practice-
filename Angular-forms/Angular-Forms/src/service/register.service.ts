import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import {UserData} from 'src/app/user-data'
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  url = 'http//localhost:9100/register';
  constructor(private http : HttpClient) { }

  register(user:UserData){
   return this.http.post<any>(this.url,user);
  }
}
