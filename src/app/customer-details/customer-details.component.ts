import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';

import { CustomersListComponent } from '../customers-list/customers-list.component';
import { Coupon } from '../coupon';
import { CouponService } from '../coupon.service';
import { Cart } from '../cart';

@Component({
  selector: 'customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  @Input() customer: Coupon;
  cusList: any;
  cart: Cart=new Cart();
  currentCoupon:any;
  constructor(private customerService: CouponService, private listComponent: CustomersListComponent,private couponlist: CustomersListComponent) { }

  ngOnInit() {
  }

 deleteCustomer() {
    this.customerService.deleteCoupon(this.customer.id)
      .subscribe(
        data => {
          console.log(data);
          this.listComponent.reloadData();
        },
        error => console.log(error));
  }


  readLocalStorageValue(key) {
    return localStorage.getItem(key);
}

addcart(id:string){
this.cusList=this.couponlist.customers;
  console.log(this.cusList);
for(let hello of this.cusList){
if(id==hello.id){
this.currentCoupon=hello;
}
}

this.cart.coupon=this.currentCoupon;
console.log(this.cart);
}
}