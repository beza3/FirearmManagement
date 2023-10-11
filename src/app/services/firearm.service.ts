import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Firearm } from '../models/Firearm.model';
import { ObserversModule } from '@angular/cdk/observers';
import { Observable, map } from 'rxjs';
import { Officer } from '../models/Officer.model';
import { Loss } from  '../models/Loss.model'; 
import { Destroyed } from  '../models/Destroyed.model'; 
import { Civillian } from '../models/Civillian.model';
import { Poag } from '../models/Poag.model';
import { Iofc } from '../models/Iofc.model';
import { Hmts } from '../models/Hmts.model';
import { User } from '../models/Users.mode';
@Injectable({
  providedIn: 'root'
})
export class FirearmService { 
  
    baseUrl = 'http://localhost:5141/api/Firearm';
    OfficerUrl = 'http://localhost:5141/api/Officer';
    allFirearmUrl = 'http://localhost:5141/api/Firearm/total-firearms'; 
    markedUrl = 'http://localhost:5141/api/Firearm/count-true-firearms';
    lossUrl = 'http://localhost:5141/api/Loss'; 
    DeletedUrl = 'http://localhost:5141/api/Firearm'; 
    CivillianUrl = 'http://localhost:5141/api/Civillian';
    DestroyedUrl ='http://localhost:5141/api/Destroyed'; 

    PoagUrl = 'http://localhost:5141/api/Poag';  
    IofcUrl = 'http://localhost:5141/api/Iofc'; 
    HmtsUrl = 'http://localhost:5141/api/Hmts';  
    
    allDestroyedUrl = 'http://localhost:5141/api/Destroyed/total-destroyed';
    allLostUrl ='http://localhost:5141/api/Loss/total-loss';
    allOfficerUrl = 'http://localhost:5141/api/Officer';

    DeleteOfficerUrl = 'http://localhost:5141/api/Officer';
   
    userUrl = 'http://localhost:3000/signup1';

  
  constructor(private http: HttpClient) { } 
   

  private user: any; // You can define a user model if needed

  setUser(user: any): void {
    this.user = user;
  }

  getUser(): any {
    return this.user;
  }

  getAllUser(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl)
  }
  //read all firearms from the database
getAllFirearms(): Observable<Firearm[]> {
      return this.http.get<Firearm[]>(this.baseUrl);
  }  
  //read all officers from the database
  getAllOfficers(): Observable<Officer[]> {
    return this.http.get<Officer[]>(this.OfficerUrl);
}  
  //Total Firearm Review in the dashboard 
getTotalFirearms(): Observable<number> {
  return this.http.get<number>(this.allFirearmUrl);
}   

 getTotalOfficer(): Observable<number> {
  return this.http.get<number>(this.OfficerUrl)
 }

getTotalDestroyed(): Observable<number> {
  return this.http.get<number>(this.allDestroyedUrl);
}
//total marked f irearm 
getTotalMarked(): Observable<number> {
  return this.http.get<number>(this.markedUrl);
}  
//
getTotalLost(): Observable<number> {
  return this.http.get<number>(this.allLostUrl)
}

addFirearm(firearm: Firearm): Observable<Firearm> { 
   return this.http.post<Firearm>(this.baseUrl, firearm);
}  

//read all lost firearms 
getallLoss(): Observable<Loss[]>{
  return this.http.get<Loss[]>(this.lossUrl)
} 
 //to delete the firearm by id

getAllCivillian(): Observable<Civillian[]>{
  return this.http.get<Civillian[]>(this.CivillianUrl)
} 

getAllDestroyed(): Observable<Destroyed[]>{
  return this.http.get<Destroyed[]>(this.DestroyedUrl)
} 

getAllPoag():Observable<Poag[]>{
  return this.http.get<Poag[]>(this.PoagUrl)
} 

getAllIofc(): Observable<Iofc[]>{
  return this.http.get<Iofc[]>(this.IofcUrl)
} 

getAllHmts(): Observable<Hmts[]>{
  return this.http.get<Hmts[]>(this.HmtsUrl)
}
//delete by id 
deleteFirearmById(id: number): Observable<void> {
  const url = `${this.DeletedUrl}/${id}`;
  return this.http.delete<void>(url);
}  

//delete by officer id 
deleteOfficerById(id: number): Observable<void> {
  const url = `${this.DeleteOfficerUrl}/${id}`;
  return this.http.delete<void>(url); // Pass the 'url' variable here
}







}