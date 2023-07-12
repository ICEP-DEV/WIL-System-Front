import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { ReAdmissionComponent } from '../components/re-admission/re-admission.component';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
 private baseUrl = 'http://localhost:8080/api';
 private emailUrl ='http://localhost:5000/api'
  // private baseUrl = 'http://192.168.27.52:8080/api'

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
};

ReAdmission(data: any):Observable<any> 
{
  return this.http.post<any>(`${this.baseUrl}/admform`, data )
};

uploadSystemDocumentation(data: any): Observable<any>
{
 return this.http.post<any>(`${this.baseUrl}/uploadSysDoc`, data)
}

saveMetorData(data: any) {
  console.log(data);
  return this.http.post(this.baseUrl + '/inviteMentor', data);
}

saveWorkstation(data: any) {
  console.log(data);
  return this.http.post(this.baseUrl + '/workInfo', data);
}

/*sendEmail(email_address:any){
  console.log(email_address)
  return this.http.post(this.emailUrl + '/send-email', { to:email_address })
}*/

sendEmail(from: string, to: string, subject: string, text: string): Observable<any> {
  const emailData = {
    from,
    to,
    subject,
    text
  };

  return this.http.post(this.emailUrl + '/send-email', emailData);
}

}

