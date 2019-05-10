import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { Payment } from '../payment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  submitted: boolean;
  payment: Payment=new Payment();
  payform:FormGroup
  
  /* nameOnCard: string;
  creditCardNumber: string;
  expMonth: string;
  expYear: string;
  cvv: string; */
  constructor(private customerService:CustomerService,private fb:FormBuilder) { }

  ngOnInit() {
    this.saves();
    this.payform=this.fb.group({
      nameOnCard:['',[Validators.required]],
      creditCardNumber:['',[Validators.required]],
      expMonth:['',[Validators.required]],
      expYear:['',[Validators.required]],
      cvv:['',[Validators.required]]

    })
  }
 /*  newPayment(): void {
    this.submitted = false;
    this.payment = new Payment();
  } */
check=false;
saves(){
  console.log("hii");
}
  save() {
    console.log("in save method")
    console.log(this.payment)
    this.submitted = true;
    this.submitted = true;
    this.customerService.createPayment(this.payment)
      .subscribe(data => console.log(data), error => console.log(error));
   // this.payment = new Payment();
  }

  onSubmit() {
    console.log("in submit method")
    this.submitted = true;
    this.save();
    this.add();
  }
  add(){
    this.check=true;
  }
  }
