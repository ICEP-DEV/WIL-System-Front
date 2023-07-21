import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

// const baseUrl = 'http://192.168.27.46:8080/api/login'
const baseUrl = 'http://localhost:8080/api/login';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  


  constructor(private http: HttpClient) { }

  login(data: any): Observable<any>
  {
    return this.http.post(baseUrl, data);
  }
}
