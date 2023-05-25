import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = 'http://localhost:8080/api/info'
  constructor(private http: HttpClient) { }



recLetter(student_no:any): Observable<any>
{
  return this.http.get<any>(`${this.baseUrl}/` +student_no);
}
}