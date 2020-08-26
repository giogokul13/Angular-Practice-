import { Component } from '@angular/core';
import { AuthService } from 'Service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  pwd1:string;
  registerUserData = {fname:'',username:'',email:'',password:''};
  constructor(private auth : AuthService,private router : Router) { }
  
  registerUser(){
    //  console.log(this.registerUserData);
    this.auth.registerUserService(this.registerUserData).subscribe
    (
      res => {console.log(res);
              localStorage.setItem('token',res.token)
              this.router.navigate(['/dashboard']);
             }
      ,
      err => 
        console.log(err)
    )
  }
  
  
  ngOnInit(): void {
  }

}
