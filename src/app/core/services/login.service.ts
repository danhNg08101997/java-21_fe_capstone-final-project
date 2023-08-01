import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/auth.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl = "http://localhost:8080/api/signin"

  constructor(private httpClient: HttpClient) { }

  sigin(user:User):Observable<any>{
    return this.httpClient.post<any>(`${this.loginUrl}`, user);
  }
}
