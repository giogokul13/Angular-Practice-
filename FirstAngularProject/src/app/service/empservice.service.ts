import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { Employee} from 'src/app/employee';
// import 'rxjs/add/observable/throw';
// import 'rxjs/add/operator/catch';
@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {
  url:string = "/fakedata/employee.json" ;

  constructor(private http : HttpClient) { }

  getemployees() : Observable <Employee[]>{
    return this.http.get<Employee[]>(this.url);
                    // .catch(this.errorhandle);
  }
  // errorhandle(error :HttpErrorResponse){
  //   return Observable.throw(error.message || "Server Error")
    
}
