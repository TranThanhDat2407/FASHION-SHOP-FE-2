import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {
  private apiUrl  = `${environment.apiBaseUrl}/api/v1/users`; // Đảm bảo đường dẫn đúng

  constructor(private http: HttpClient) {}

  // Gửi yêu cầu quên mật khẩu (gửi OTP qua email)
  forgotPassword(email: string): Observable<any> {
    const params = new HttpParams().set('email', email);
    return this.http.post<any>(`${this.apiUrl}/forgot-password`, {}, { params });
  }

  verifyOtp(email: string, otp: string): Observable<any> {
    const params = new HttpParams().set('email', email).set('otp', otp);
    return this.http.post<any>(`${this.apiUrl}/verify-otp`, {}, { params });
  }

  resetPassword(email: string, newPassword: string): Observable<any> {
    const params = new HttpParams().set('email', email).set('newPassword', newPassword);
    return this.http.post<any>(`${this.apiUrl}/reset-password`, {}, { params });
  }
}
