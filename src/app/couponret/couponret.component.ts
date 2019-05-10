import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';
import { Payment } from 'src/app/payment';
import { CouponData } from '../CouponData';




@Component({
  selector: 'app-couponret',
  templateUrl: './couponret.component.html',
  styleUrls: ['./couponret.component.css']
})
export class CouponretComponent implements OnInit {

  constructor(private cusservice:CustomerService) { }

  payment:Payment[];
  coupon:CouponData[];
  
  ngOnInit() {
    this.reloadData();
  }
  reloadData(){
    this.cusservice.getPaymentAll(this.payment).subscribe(data=>{
      console.log(data);
      this.payment=data as Payment[];
    });
  }

}
