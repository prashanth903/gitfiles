import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { SearchCustomersComponent } from './search-customers/search-customers.component';
import { AppComponent } from './app.component';
import { HomeviewComponent } from './homeview/homeview.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { TravellingComponent } from './travelling/travelling.component';
import { FoodComponent } from './food/food.component';
import { FitnessComponent } from './fitness/fitness.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { HomeComponent } from './home/home.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { CreateCouponComponent } from './create-coupon/create-coupon.component';
import { CouponretComponent } from './couponret/couponret.component';

const routes: Routes = [
    { path: '', redirectTo: 'homepage', pathMatch: 'full' },
    { path: 'customer', component: CustomersListComponent },
    { path: 'add', component: CreateCustomerComponent },
    { path: 'findbyage', component: SearchCustomersComponent },
    { path: 'homeview', component: HomeviewComponent },
    { path: 'home' , component:AppComponent},
    { path: 'shopping', component: ShoppingComponent },
    { path: 'food', component: FoodComponent },
    { path: 'travelling', component: TravellingComponent },
    { path: 'fitness', component: FitnessComponent },
    { path: 'cart', component: CartComponent },
    { path: 'payment', component: PaymentComponent },
    { path: 'homepage', component: HomeComponent  },
    { path: 'admin', component: AdminloginComponent  },
    { path: 'createCoupon', component: CreateCouponComponent },
    { path: 'couponret', component: CouponretComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
