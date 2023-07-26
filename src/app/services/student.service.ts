import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { ReAdmissionComponent } from '../components/re-admission/re-admission.component';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  static logentrie() {
    throw new Error('Method not implemented.');
  }
  private baseUrl = 'http://localhost:8080/api';
  // private BaseUrl = 'http://192.168.27.46:8080/api'

  constructor(private http: HttpClient) { }



recLetter(student_no:any): Observable<any>
{
  
  // return this.http.get<any>(`${this.baseUrl}/` +student_no);
  return this.http.get<any>(`${this.baseUrl}/info/` +student_no);
}

epForm(data: any): Observable<any>
{
  return this.http.post<any>(`${this.baseUrl}/forms`, data );
}

uploadPlacementLetter(data: any): Observable<any> 
{
  return this.http.post<any>(`${this.baseUrl}/uploadFolder`, data )
}

ReAdmission(data: any):Observable<any> 
{
  return this.http.post<any>(`${this.baseUrl}/admform`, data )
}

logentries: any;

entries(data: any): Observable<any>
{
 return this.http.post<any>(`${this.baseUrl}/subLogbook`, data)
 return this.http.post<any>(`${this.baseUrl}/subLogbook/:month`, data)
};

getStatus(student_no:any): Observable<any>
{
 return this.http.get<any>(`${this.baseUrl}/getMonthlyStatus/${student_no}`)
};

}



 
