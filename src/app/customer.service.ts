import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = 'http://localhost:9999/customer';
  private paymentUrl = 'http://localhost:9999/payment';
  

  constructor(private http: HttpClient) { }

  getCustomer(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCustomer(customer: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, customer);
  }

  updateCustomer(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCustomersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getCustomersByAge(customer: Object): Observable<any> {
    return this.http.post(`${this.baseUrl}`+`/valid`,customer);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
  }

  createPayment(payment: Object): Observable<Object> {
    console.log(payment)
    console.log(`${this.paymentUrl}` + `/add`)
    return this.http.post(`${this.paymentUrl}` + `/add`, payment);
  }
  
  getPaymentAll(payment: Object):Observable<any>{
    return this.http.get(`${this.paymentUrl}`+`/getCoupon`,payment);
  }


}
