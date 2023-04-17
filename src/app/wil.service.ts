import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WilService {

  constructor(private http: HttpClient) { }
  getUserDetails(){
    return this.http.get('http://192.168.27.52:8080/api/')
  }

  /*getUDetailbyPara(){
    let param = new HttpParams().set('student_no',1)
    return this.http.get('http://192.168.27.52:8080/api/',{params:param})
  }*/

}

