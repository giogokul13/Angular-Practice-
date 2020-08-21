import { Component } from '@angular/core';
import {UserData} from './user-data'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Forms';

  User = new UserData("","","",'',"","","");
  
  onsubmit(){
    console.log(this.User)
  }
}
