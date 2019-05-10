import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CouponService {
  private baseUrl = 'http://localhost:9999/coupon';
  
  couponList:any;
  constructor(private http: HttpClient) { }

  createCoupon(coupon: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, coupon);
  }
  getCouponList(): Observable<any> {
    this.couponList=this.http.get(`${this.baseUrl}`);
    return this.http.get(`${this.baseUrl}`);
  }

  deleteCoupon(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}
