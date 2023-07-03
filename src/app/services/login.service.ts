import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

const baseUrl = 'http://168.172.134.90:8080/api/login'
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
