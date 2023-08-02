import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private API_CATEGORIES = 'http://localhost:8080/api/category';

  constructor(private httpClient: HttpClient) {}

  getCategories(payload: any) {
    return this.httpClient.post<any>(`${this.API_CATEGORIES}`, payload);
  }
}
