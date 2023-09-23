import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Firearm } from '../models/Firearm.model';
import { ObserversModule } from '@angular/cdk/observers';
import { Observable, map } from 'rxjs';
import { Officer } from '../models/Officer.model';

@Injectable({
  providedIn: 'root'
})
export class FirearmService {
    baseUrl = 'http://localhost:5141/api/Firearm';
    OfficerUrl = 'http://localhost:5141/api/Officer';
    allFirearmUrl = 'http://localhost:5141/api/Firearm/total-firearms'; 
    markedUrl = 'http://localhost:5141/api/Firearm/count-true-firearms';
    
  constructor(private http: HttpClient) { } 

  //Get 
  getAllFirearms(): Observable<Firearm[]> {
      return this.http.get<Firearm[]>(this.baseUrl);
  } 
  getAllOfficers(): Observable<Officer[]> {
    return this.http.get<Officer[]>(this.OfficerUrl);
}  
  //Total Firearm Review in the dashboard 
getTotalFirearms(): Observable<number> {
  return this.http.get<number>(this.allFirearmUrl);
} 
//total marked firearm 
getTotalMarked(): Observable<number> {
  return this.http.get<number>(this.markedUrl);
} 

  addFirearm(firearm: Firearm): Observable<Firearm> { 
   return this.http.post<Firearm>(this.baseUrl, firearm);
  }
}
