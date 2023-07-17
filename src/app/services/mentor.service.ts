import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'


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
  getlogEntries(student_no:any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/getlogbooks/` + student_no);
  }

  sendEntries(data: any){
    return this.http.post(this.baseUrl ,data);}

   logDesc(student_no: any, month:any){
    console.log(student_no)
    console.log(month)
    return this.http.get(`${this.baseUrl}/logDisc/${student_no}/${month}`);
  }

  updateCell(logbook_id:any, approval: any) {

    const body = {
      cell: approval
    };

    console.log(approval)
    return this.http.patch(`${this.baseUrl}/logEvaluation/${logbook_id}`,body);
  }
}
