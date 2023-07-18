import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AdminService {

 // private baseUrl = 'http://localhost:8080/api';
 //private baseUrl = 'http://localhost:8080/api'
 private baseUrl = 'http://192.168.27.46:8080/api';

 constructor(private http: HttpClient) { }



willInfo(data:any): Observable<any>
{
  // return this.http.get<any>(`${this.baseUrl}/` +student_no);
 return this.http.get<any>(`${this.baseUrl}/getWilInfo/` +data);
}

getwillInfoById(student_no: any):Observable<any>{
  //console.log('Received Student Number:', student_no);
  return this.http.get<any>(`${this.baseUrl}/willInfoById/` +student_no);
}

getPlacementLetter(student_no: string, fileName: string): Observable<any> {
  return this.http.get<any>(`${this.baseUrl}/placementLetter/${student_no}/${fileName}`, { responseType: 'blob' as 'json' });
}

getStudents(student_no:string): Observable<any> {
  console.log(student_no);
  return this.http.get<any>(`${this.baseUrl}/students/${student_no}`);
  
}

getformById(student_no: any):Observable<any>{
  console.log('Received Student Number:', student_no);
  return this.http.get<any>(`${this.baseUrl}/admissionForm/` +student_no);
}

getApprove(data: any): Observable<any>
{
  return this.http.post<any>(`${this.baseUrl}/appApprove`, data );
}





}