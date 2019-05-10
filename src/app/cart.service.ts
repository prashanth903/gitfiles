import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  reloadData() {
    throw new Error("Method not implemented.");
  }

  private baseUrl = 'http://localhost:9999/cart';

  constructor(private http: HttpClient) { }

  addToCart(cart: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/add`, cart);
   }
  getCartList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
    
  }
  deleteCartItem(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}
