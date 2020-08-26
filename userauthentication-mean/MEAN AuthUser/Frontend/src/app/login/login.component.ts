import { Component, OnInit } from '@angular/core';
import { AuthService } from 'Service/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData = {email:'' , password:''};
  constructor(private auth:AuthService, private router :Router) { }


loginUser(){
  // console.log(this.loginUserData);
  this.auth.loginUserService(this.loginUserData).subscribe
  (
    res => {
      console.log(res);
      localStorage.setItem('token', res.token);
      this.router.navigate(['/dashboard']);
    },
    err => console.log(err)

  )

}

  ngOnInit(): void {
  }

}
