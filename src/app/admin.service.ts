import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:9999/admin';

  validateAdmin(customer: Object): Observable<any> {
    return this.http.post(`${this.baseUrl}`+`/valid`,customer);
  }
}
