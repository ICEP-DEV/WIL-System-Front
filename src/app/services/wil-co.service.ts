import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WilCoService {
  private baseUrl = 'http://192.168.27.46:8080/api';
  constructor(private http: HttpClient) { }
 // http://192.168.27.46:8080/api/getWorkInfo

    getRegisteredStu( data: any):Observable<any> 
    {
      return this.http.get<any>(`${this.baseUrl}/getStudInfo`, data )
    }

    getStudDetail( data: any):Observable<any> 
    {
      return this.http.get<any>(`${this.baseUrl}/getNameSur`, data )
    }

    getPlacement( data: Number):Observable<any> 
    {
      return this.http.get<any>(`${this.baseUrl}/getWorkInfo/`+ data )
    }

    getMentor( data: any):Observable<any> 
    {
      return this.http.get<any>(`${this.baseUrl}/getMentorInfo/`+ data )
    }

    systemDoc( data: any):Observable<any> 
    {
      return this.http.get<any>(`${this.baseUrl}/sysDoc/`, data )
    }

  // getDocumentations( data: any):Observable<any> 
  // {
  //   return this.http.get<any>(`${this.baseUrl}/`, data )
  // }

  // getCoEvaluation( data: any):Observable<any> 
  // {
  //   return this.http.get<any>(`${this.baseUrl}/getCoInfo`, data )
  // }

  // getSupEvaluation( data: any):Observable<any> 
  // {
  //   return this.http.get<any>(`${this.baseUrl}/getSupInfo`, data )
  // }
}
