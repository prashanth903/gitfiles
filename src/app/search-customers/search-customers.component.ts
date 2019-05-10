import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';


@Component({
  selector: 'search-customers',
  templateUrl: './search-customers.component.html',
  styleUrls: ['./search-customers.component.css']
  
})
export class SearchCustomersComponent implements OnInit {
  username=null;
  name=false;
  customer:Customer=new Customer();
  submitted=false;
  check=false;
  ankit=null;
  constructor(private dataService: CustomerService,private router : Router) { }

  ngOnInit() {
    
  }
  cust(){
    this.submitted=false;
    this.customer=new Customer();
  }

  private searchCustomers() {
    
    this.dataService.getCustomersByAge(this.customer)
      .subscribe(cus => {
          if(cus!=null){
            console.log(cus);
            this.check=false;
            localStorage.setItem('ankit',cus['name'])
            localStorage.setItem('role','customer')
            
             this.router.navigateByUrl('homeview');
              
          }
          else
          {
            this.username="Wrong Credentials";
            console.log(cus);
            this.check=true;
            this.router.navigateByUrl('findbyage');
          }
      });
  }

  onSubmit() {
    this.submitted=true;
    this.searchCustomers();
  }
  
}
