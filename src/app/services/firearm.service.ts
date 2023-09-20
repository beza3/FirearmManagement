import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Firearm } from '../models/Firearm.model';
import { ObserversModule } from '@angular/cdk/observers';
import { Observable } from 'rxjs';
import { Officer } from '../models/Officer.model';

@Injectable({
  providedIn: 'root'
})
export class FirearmService {
    baseUrl = 'http://localhost:5141/api/Firearm';
    OfficerUrl = 'http://localhost:5141/api/Officer';
    allFirearmUrl = 'http://localhost:5141/api/Firearm/total-firearms';
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

  addFirearm(firearm: Firearm): Observable<Firearm> { 
    firearm.id = '00000000-0000-0000-0000-000000000000';
   return this.http.post<Firearm>(this.baseUrl, firearm);
  }
}
