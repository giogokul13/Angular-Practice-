import { Component, OnInit } from '@angular/core';
import {ServiceCheckService} from  'src/app/service/service-check.service'
@Component({
  selector: 'app-newcomponent',
  templateUrl: './newcomponent.component.html',
  styleUrls: ['./newcomponent.component.css'],
  providers:[ServiceCheckService]
})
export class NewcomponentComponent {

  dataservice;
  constructor( dataservice : ServiceCheckService){
    this.dataservice = dataservice;
  }
  incrementnewcomponent(){
    this.dataservice.count++;
}
  ngOnInit(): void {
  }

}
