import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MentorService {

  //private baseUrl = 'http://168.172.134.142:8080/api';
  //private baseUrl = 'http://localhost:8080/api'
  private baseUrl = 'http://localhost:8080/api'

  constructor(private http: HttpClient) { }

  getData(email_address:any): Observable<any> {
    console.log(email_address)
  return this.http.get<any>(`${this.baseUrl}/getMentees/tt@gmail.com`/*+ email_address*/); //sub email address with  "+ email_address"
  }

  //get log entries
  getlogEntries(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  sendEntries(data: any){
    return this.http.post(this.baseUrl ,data);}
}
