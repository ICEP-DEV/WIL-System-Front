import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { ReAdmissionComponent } from '../components/re-admission/re-admission.component';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  //private baseUrl = 'http://localhost:8080/api';
  private BaseUrl = 'http://192.168.27.52:8080/api'

  constructor(private http: HttpClient) { }



recLetter(student_no:any): Observable<any>
{
  
  // return this.http.get<any>(`${this.baseUrl}/` +student_no);
  return this.http.get<any>(`${this.BaseUrl}/info/` +student_no);
}

epForm(data: any): Observable<any>
{
  return this.http.post<any>(`${this.BaseUrl}/forms`, data );
}

uploadPlacementLetter(data: any): Observable<any> 
{
  return this.http.post<any>(`${this.BaseUrl}/uploadFolder`, data )
};

ReAdmission(data: any):Observable<any> 
{
  return this.http.post<any>(`${this.BaseUrl}/admform`, data )
};

uploadSystemDocumentation(data: any): Observable<any>
{
 return this.http.post<any>(`${this.BaseUrl}/uploadSysDoc`, data)
}




}

