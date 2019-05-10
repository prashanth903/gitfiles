import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Coupon Service';
  description = 'The Best Deals you will find here';
  
  constructor(private router : Router) { }
  
  readValue(key)
{
return localStorage.getItem(key);

}
logout(){
  localStorage.setItem('role','nothing');
this.router.navigateByUrl('homepage');
}
}
