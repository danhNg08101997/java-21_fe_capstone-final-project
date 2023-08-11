import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GdvService {
  private API_GDV = 'http://localhost:8080/api/gdv';
  constructor(private http: HttpClient) {}

  getAll(payload: any) {
    return this.http.post<any>(`${this.API_GDV}`, payload);
  }
  getByUsername(payload: any) {
    return this.http.post<any>(`${this.API_GDV}/getUsername`, payload);
  }
  create(payload: any) {
    return this.http.post<any>(`${this.API_GDV}/create`, payload);
  }
  update(payload: any) {
    return this.http.post<any>(`${this.API_GDV}/edit`, payload);
  }
  delete(payload: any) {
    return this.http.post<any>(`${this.API_GDV}/delete`, payload);
  }
}
