import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AdminService {

 // private baseUrl = 'http://localhost:8080/api';
 private baseUrl = 'http://localhost:8080/api'

 constructor(private http: HttpClient) { }



willInfo(data:any): Observable<any>
{
  // return this.http.get<any>(`${this.baseUrl}/` +student_no);
 return this.http.get<any>(`${this.baseUrl}/getWilInfo/` +data);
}

getwillInfoById(student_no: any):Observable<any>{
  console.log('Received Student Number:', student_no);
  return this.http.get<any>(`${this.baseUrl}/willInfoById/` +student_no);
}
}