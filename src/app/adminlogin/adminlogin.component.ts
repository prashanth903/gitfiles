import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { Customer } from '../customer';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  username=null;
  name=false;
  customer:Customer=new Customer();
  submitted=false;
  check=false;
  ankit=null;
  
  constructor(private dataService: AdminService,private router : Router) { }

  ngOnInit() {
    
  }
  cust(){
    this.submitted=false;
    this.customer=new Customer();
  }

  private searchCustomers() {
    
    this.dataService.validateAdmin(this.customer)
      .subscribe(cus => {
          if(cus!=null){
            console.log(cus);
            this.check=false;
            localStorage.setItem('role','admin');
            localStorage.setItem('ankit',cus['name']);
            
             this.router.navigateByUrl('homeview');
              
          }
          else
          {
            this.username="Wrong Credentials";
            console.log(cus);
            
          }
      });
  }

  onSubmit() {
    this.submitted=true;
    this.searchCustomers();
  }
  
}
