import { Component } from '@angular/core';
import {ServiceCheckService} from './service/service-check.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "angularpro";
  dataservice;
  constructor( dataservice : ServiceCheckService){
    this.dataservice = dataservice;
  }
  incrementapp(){
   this.dataservice.count++;
  }
}
