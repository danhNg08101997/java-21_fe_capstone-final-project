import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private API_PRODUCT = 'http://localhost:8080/api/product';
  constructor(private http: HttpClient) {}

  getProducts(payload: any) {
    return this.http.post<any>(`${this.API_PRODUCT}`, payload);
  }
}
