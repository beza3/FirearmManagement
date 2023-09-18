import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Firearm } from '../models/Firearm.model';
import { ObserversModule } from '@angular/cdk/observers';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirearmService {
    baseUrl = 'http://localhost:5141/api/Firearm';
  constructor(private http: HttpClient) { } 

  //Get
  getAllFirearms(): Observable<Firearm[]> {
      return this.http.get<Firearm[]>(this.baseUrl);
  } 
    

  addFirearm(firearm: Firearm): Observable<Firearm> { 
    firearm.id = '00000000-0000-0000-0000-000000000000';
   return this.http.post<Firearm>(this.baseUrl, firearm);
  }
}
