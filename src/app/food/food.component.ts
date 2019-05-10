import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Coupon } from '../coupon';
import { CouponService } from '../coupon.service';
import { Cart } from '../cart';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  @Input() coupon:Coupon;
  customers: any;
  cart: Cart=new Cart();
  currentCoupon:any;
  constructor(private couponService: CouponService,private cartservice:CartService) { }

  ngOnInit() 
  {
    this.reloadData();
  }
  reloadData() 
  {
    this.couponService.getCouponList().subscribe((res)=>{
      this.customers=res;
    });
  }

  readValue(key)
  {
    return localStorage.getItem(key);
  
  }
  deleteCustomer() 
  {
    
    this.couponService.deleteCoupon(this.coupon.id)
      .subscribe(
        data => {
          console.log(data);
          this.couponService.getCouponList();
        },
        error => console.log(error));


}
addcart(id:string){
  console.log(id);
for(let hello of this.customers){
if(id==hello.id){
this.currentCoupon=hello;
}
}

this.cart.coupon=this.currentCoupon;
console.log(this.cart);

this.cartservice.addToCart(this.cart)
      .subscribe(data => console.log(data), error => console.log(error));
    this.cart = new Cart();
}

}

