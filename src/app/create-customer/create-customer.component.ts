import { Component, OnInit } from '@angular/core';

import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  f1:FormGroup;
  customer: Customer = new Customer();
  submitted = false;

  constructor(private customerService: CustomerService,private fb: FormBuilder) { }

  ngOnInit() {
    this.f1 = this.fb.group({
      name:['',Validators.required],
      email:['',[ Validators.required,Validators.pattern('[a-zA-Z0-9_.+-]+@gmail.com+$')] ],
      uname: ['', Validators.required],
      pass:['',[ Validators.required,Validators.maxLength(15),Validators.minLength(6),	Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')] ]


     });
  }
 
  newCustomer(): void {
    this.submitted = false;
    this.customer = new Customer();
   
  }

  check=false;
  save() {
    
    this.customerService.createCustomer(this.customer)
      .subscribe(data => console.log(data), error => console.log(error));
    this.customer = new Customer();
  }

  onSubmit() {
    console.log("in login")
    console.log(this.f1)
    this.submitted = true;
    this.save();
    this.add();
  }
  add(){
    this.check=true;
  }
}
