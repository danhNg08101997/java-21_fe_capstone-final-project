import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private API_CATEGORY = 'http://localhost:8080/api/category';
  
  constructor(private http: HttpClient) {}

  getAll(payload: any) {
    return this.http.post<any>(`${this.API_CATEGORY}`, payload);
  }
}
