import { Component, OnInit } from '@angular/core';
import { EmpserviceService } from 'src/app/service/empservice.service';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent  {
  employees = [];
  errormsg: any;
  constructor(private empservice : EmpserviceService) { }

  ngOnInit(): void {
    this.empservice.getemployees().subscribe(data => this.employees = data);
                // error => this.errormsg = error);
  }

}
