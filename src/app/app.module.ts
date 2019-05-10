import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { SearchCustomersComponent } from './search-customers/search-customers.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeviewComponent } from './homeview/homeview.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { FoodComponent } from './food/food.component';
import { TravellingComponent } from './travelling/travelling.component';
import { FitnessComponent } from './fitness/fitness.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { HomeComponent } from './home/home.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AddCouponComponent } from './add-coupon/add-coupon.component';
import { CreateCouponComponent } from './create-coupon/create-coupon.component';
import { CouponretComponent } from './couponret/couponret.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent,
    CustomerDetailsComponent,
    CustomersListComponent,
    SearchCustomersComponent,
    HomeviewComponent,
    ShoppingComponent,
    FoodComponent,
    TravellingComponent,
    FitnessComponent,
    CartComponent,
    PaymentComponent,
    HomeComponent,
    AdminloginComponent,
    AddCouponComponent,
    CreateCouponComponent,
    CouponretComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,ReactiveFormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
