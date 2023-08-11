import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_AUTH = 'http://localhost:8080/api';
  constructor(private http: HttpClient) {}

  login(payload: any) {
    return this.http.post<any>(`${this.API_AUTH}/signin`, payload);
  }
  register(payload: any) {
    return this.http.post<any>(`${this.API_AUTH}/signup`, payload);
  }
}
