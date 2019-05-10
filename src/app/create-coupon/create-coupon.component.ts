import { Component, OnInit } from '@angular/core';
import { Coupon } from '../coupon';
import { CouponService } from '../coupon.service';

@Component({
  selector: 'app-create-coupon',
  templateUrl: './create-coupon.component.html',
  styleUrls: ['./create-coupon.component.css']
})
export class CreateCouponComponent implements OnInit {

  coupon: Coupon = new Coupon();
  submitted = false;

  constructor(private customerService: CouponService) { }

  ngOnInit() {
  }
  newCustomer(): void {
    this.submitted = false;
    this.coupon = new Coupon();
   
  }

  check=false;
  save() {
    
    this.customerService.createCoupon(this.coupon)
      .subscribe(data => console.log(data), error => console.log(error));
    this.coupon = new Coupon();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
    this.add();
  }
  add(){
    this.check=true;
  }
}
