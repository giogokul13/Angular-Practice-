import { Component } from '@angular/core';
import {FormControl, FormGroup,FormBuilder,Validator, Validators} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  get uname(){
    return this.regformgroup.get('uname');
  }
  get pwd(){
    return this.regformgroup.get('password');
  }
  get pwd1(){
    return this.regformgroup.get('confirmpassword');
  }


  title = 'reactive-forms';
  constructor(private formbuilder : FormBuilder){}
  // regformgroup = new FormGroup({
  //   uname :new FormControl('gokul'),
  //   password : new FormControl(),
  //   confirmpassword : new FormControl()
  // });

  //loaddata(){
  //   this.regformgroup.setValue({
  //     uname : "gokul",
  //     password : "12234245",
  //     confirmpassword : "1236124634"
  //   })
  // }

  // this.regformgroup.patchValue({
  //   uname : "gokul v 2.0"
  // })

  regformgroup = this.formbuilder.group({
    uname : ['',[Validators.required,Validators.minLength(5)]],
    password : ['',[Validators.required,Validators.minLength(8)]],
    confirmpassword : ['',[Validators.required,Validators.minLength(8)]]
  });

}
