import { error } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { combineLatest } from 'rxjs';
import { RegisterService } from 'src/service/register.service';
import {UserData} from './user-data'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Forms';
  User = new UserData("","","",'',"","","");
  constructor( private regser : RegisterService){

  }
  onsubmit(){

    this.regser.register(this.User).subscribe (
      data => console.log("success!!"  + data),
      error => console.log("Error!!!"  + error)

    )
  }
}
