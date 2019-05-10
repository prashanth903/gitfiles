import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../cart';
import { CouponService } from '../coupon.service';
import { CartService } from '../cart.service';
import { Customer } from '../customer';
import { Coupon } from '../coupon';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 cart: Cart=new Cart();
  carts: any;
  coupon: Coupon=new Coupon();
  
  constructor(private customerService: CouponService, private cartService: CartService) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.cartService.getCartList().subscribe((res)=>{
      this.carts=res;
      console.log(res);
    });
    
  }
  readValue(key){
    return localStorage.getItem(key);
  }

  getuname(key){
    return localStorage.getItem(key);
  }
  deleteItem(id:any) {
    console.log(id);
    this.cart.id=id;
    console.log(this.cart.id);
    this.cartService.deleteCartItem(this.cart.id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }


  readLocalStorageValue(key) {
    return localStorage.getItem(key);
}

  
}