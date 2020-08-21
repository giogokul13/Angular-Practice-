import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-forms';

  regformgroup = new FormGroup({
    uname :new FormControl(),
    password : new FormControl(),
    confirmpassword : new FormControl()
  });
}
