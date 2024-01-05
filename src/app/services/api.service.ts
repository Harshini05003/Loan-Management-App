import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urls } from '../models/urls';
import { Observable, Subject } from 'rxjs';
import { homeDetails, summaryDetails } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  urls=urls
  
  constructor(private http:HttpClient) { }
  getHomeDetails():Observable<homeDetails>{
    return this.http.get<homeDetails>(urls.homeDetails)
  }
  getSummaryDetails(id:any):Observable<summaryDetails>{
    return this.http.get<summaryDetails>(`${urls.summaryDetails}/${id}`);
  }
  putStatus(id:any,data:any):Observable<homeDetails>{
    return this.http.put<homeDetails>(`${urls.homeDetails}/${id}`,data);
  }
  
 
}
