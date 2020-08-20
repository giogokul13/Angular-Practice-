import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { EmpserviceService } from 'src/app/service/empservice.service';

@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})
export class EmpdetailsComponent implements OnInit {
  employees = [];
  errormsg: any ;
  constructor(private empservice : EmpserviceService) { }

  ngOnInit(): void {
    this.empservice.getemployees().subscribe((data) => this.employees = data);
      // error => this.errormsg = error);
                
                
                                  
  }

}
