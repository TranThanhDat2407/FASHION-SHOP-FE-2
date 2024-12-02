import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {


  private apiUrl = `${environment.apiBaseUrl}/api/v1/order-details`;

  constructor(private http: HttpClient) { }



  getOrderDetailsByOrderId(orderId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/order/${orderId}`);
  }
}
