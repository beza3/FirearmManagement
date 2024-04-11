import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Firearm } from '../models/Firearm.model';
import { ObserversModule } from '@angular/cdk/observers';
import { Observable, map } from 'rxjs';
import { Officer } from '../models/Officer.model';
import { Loss } from '../models/Loss.model';
import { Destroyed } from '../models/Destroyed.model';
import { Civillian } from '../models/Civillian.model';
import { Poag } from '../models/Poag.model';
import { Iofc } from '../models/Iofc.model';
import { Hmts } from '../models/Hmts.model';
import { User } from '../models/Users.mode'; 
import { Withdraw } from '../models/withdraw.model';  
import { FirearmHolder } from '../models/FirearmHolder.model'
import { OfficerPending } from '../models/OfficerPending.model'; 

@Injectable({
  providedIn: 'root',
})   

export class FirearmService {
  baseUrl = 'http://localhost:5000/api/Firearm/firearm';
  getFirearmByType = 'http://localhost:5000/api/Firearm/firearm-type-counts';     
  getFirearmBySource = 'http://localhost:5000/api/Firearm/firearm-source-counts';
  // getFirearmByHolder = 'http://localhost:5000/api/Firearm/firearm-holder-counts'; 
  
  //Daily Graph
  getDailyLossFirearm = 'http://localhost:5000/api/Loss/count-losses/day';   
  getDailyDestroyedFirearm = 'http://localhost:5000/api/Loss/count-losses/day';
  getDailyReturnedFirearm = 'http://localhost:5000/api/Firearm/count-daily-returned-firearm'; 
  getDailyRecoveredFirearm = 'http://localhost:5000/api/Firearm/count-daily-recoverd-firearm';
  getDailyWithdrawFirearm = 'http://localhost:5000/api/Withdrawals/count/daily';  
  
  //weekly graph  
  getWeeklyLossFirearm = 'http://localhost:5000/api/Loss/count-losses/week';  
  getWeeklyDestroyedFirearm = 'http://localhost:5000/api/Destroyed/count-destroyed/week';
  getWeeklyReturnedFirearm = 'http://localhost:5000/api/Firearm/weekly'; 
  getWeeklyRecoveredFirearm = 'http://localhost:5000/api/Firearm/count-weekly-recover-firearm';
  getweeklyWithdrawFirearm = 'http://localhost:5000/api/Withdrawals/count/weekly';  
  
  //monthly graph  
  getMonthlyLossFirearm = 'http://localhost:5000/api/Withdrawals/count/monthly';  
  getMonthlyDestroyedFirearm = 'http://localhost:5000/api/Destroyed/count-destroyed/month';
  getMonthlyReturnedFirearm = 'http://localhost:5000/api/Firearm/monthly'; 
  getMonthlyRecoveredFirearm = 'http://localhost:5000/api/Firearm/count-monthly-recover-firearm';
  getMonthlyWithdrawFirearm = 'http://localhost:5000/api/Withdrawals/count/weekly';  
  
  //Yearly graph 
  getYearlyLossFirearm = 'http://localhost:5000/api/Loss/count-losses/week';  
  getYearlyDestroyedFirearm = 'http://localhost:5000/api/Destroyed/count-destroyed/year';
  getYearlyReturnedFirearm = 'http://localhost:5000/api/Firearm/yearly'; 
  getYearlyRecoveredFirearm = 'http://localhost:5000/api/Firearm/count-yearly-recover-firearm';
  getYearlyWithdrawFirearm = 'http://localhost:5000/api/Withdrawals/count/yearly';  
  
  //for the withdraw graph 
  postwithdrawFirearm = 'http://localhost:5000/api/Withdrawals'; 
  postfirearmHolder = 'http://localhost:5000/api/FirearmHolder';
  getfirearmHolder = 'http://localhost:5000/api/FirearmHolder/firearm-type-counts';
   
 //pending operations 
 postOfficerPending = 'http://localhost:5000/api/OfficerPending'; 
 getOfficerPending = 'http://localhost:5000/api/OfficerPending'; 


  OfficerUrl = 'http://localhost:5000/api/Officer';
  allFirearmUrl = 'http://localhost:5000/api/Firearm/total-firearms';
  markedUrl = 'http://localhost:5000/api/Firearm/count-true-firearms';
  lossUrl = 'http://localhost:5000/api/Loss';
  DeletedUrl = 'http://localhost:5000/api/Firearm';
  CivillianUrl = 'http://localhost:5000/api/Civillian';
  DestroyedUrl = 'http://localhost:5000/api/Destroyed';

  PoagUrl = 'http://localhost:5000/api/Poag';
  IofcUrl = 'http://localhost:5000/api/Iofc';
  HmtsUrl = 'http://localhost:5000/api/Hmts';

  allDestroyedUrl = 'http://localhost:5000/api/Destroyed/total-destroyed';
  allLostUrl = 'http://localhost:5000/api/Loss/total-loss';
  allOfficerUrl = 'http://localhost:5000/api/Officer';

  DeleteOfficerUrl = 'http://localhost:5000/api/Officer';

  userUrl = 'http://localhost:3000/signup1';

  constructor(private http: HttpClient) {}

  private user: any; // You can define a user model if needed

  setUser(user: any): void {
    this.user = user;
  }

  getUser(): any {
    return this.user;
  }

  getAllUser(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }
  //read all firearms from the database
  getAllFirearms(): Observable<Firearm[]> {
    return this.http.get<Firearm[]>(this.baseUrl);
  }
  getallFirearmByType(): Observable<Firearm[]> {
    return this.http.get<Firearm[]>(this.getFirearmByType);
  }

  getallFirearmBySource(): Observable<Firearm[]> {
    return this.http.get<Firearm[]>(this.getFirearmBySource);
  } 

  getallDailyLossFirearm(): Observable<Loss[]> {
    return this.http.get<Loss[]>(this.getDailyLossFirearm);
  } 
 
  getallDailyDestroyedFirearm(): Observable<Destroyed[]> {
    return this.http.get<Destroyed[]>(this.getDailyDestroyedFirearm);
  }   

  getallDailyReturnedFirearm():Observable<Firearm[]> {
    return this.http.get<Firearm[]>(this.getDailyReturnedFirearm);
  }    

  getallDailyRecoveredFirearm():Observable<Firearm[]> {
    return this.http.get<Firearm[]>(this.getDailyRecoveredFirearm);
  }   

  getallDailyWithdrawFirearm():Observable<Withdraw[]> {
    return this.http.get<Withdraw[]>(this.getDailyWithdrawFirearm);
  }   

//weekly graph  

getallWeekllyLossFirearm(): Observable<Loss[]> {
  return this.http.get<Loss[]>(this.getWeeklyLossFirearm);
}  

getallWeeklyDestroyedFirearm():Observable<Destroyed[]> {
  return this.http.get<Destroyed[]>(this.getWeeklyDestroyedFirearm);
}    
 
getallWeeklyReturnedFirearm():Observable<Firearm[]> {
  return this.http.get<Firearm[]>(this.getWeeklyReturnedFirearm);
}    

getallWeeklyRecoveredFirearm():Observable<Firearm[]> {
  return this.http.get<Firearm[]>(this.getWeeklyRecoveredFirearm);
}     

getallweeklyWithdrawFirearm():Observable<Withdraw[]> {
  return this.http.get<Withdraw[]>(this.getweeklyWithdrawFirearm);
}     

//Monthly Graph 
getallMonthlyLossFirearm(): Observable<Loss[]> {
  return this.http.get<Loss[]>(this.getMonthlyLossFirearm);
}  

getallMonthlyDestroyedFirearm():Observable<Destroyed[]> {
  return this.http.get<Destroyed[]>(this.getMonthlyDestroyedFirearm);
}    
 
getallMonthlyReturnedFirearm():Observable<Firearm[]> {
  return this.http.get<Firearm[]>(this.getMonthlyReturnedFirearm);
}    

getallMonthylRecoveredFirearm():Observable<Firearm[]> {
  return this.http.get<Firearm[]>(this.getMonthlyRecoveredFirearm);
}     

getallMonthlyWithdrawFirearm():Observable<Withdraw[]> {
  return this.http.get<Withdraw[]>(this.getMonthlyWithdrawFirearm);
}     

//Yearly Graph 
getallYearlyLossFirearm(): Observable<Loss[]> {
  return this.http.get<Loss[]>(this.getYearlyLossFirearm);
}  

getallYearlyDestroyedFirearm():Observable<Destroyed[]> {
  return this.http.get<Destroyed[]>(this.getYearlyDestroyedFirearm);
}    
 
getallYearlyReturnedFirearm():Observable<Firearm[]> {
  return this.http.get<Firearm[]>(this.getYearlyReturnedFirearm);
}    

getallYearlyRecoveredFirearm():Observable<Firearm[]> {
  return this.http.get<Firearm[]>(this.getYearlyRecoveredFirearm);
}     

getallYearlyWithdrawFirearm():Observable<Withdraw[]> {
  return this.http.get<Withdraw[]>(this.getYearlyWithdrawFirearm);
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
    return this.http.get<number>(this.OfficerUrl);
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
    return this.http.get<number>(this.allLostUrl);
  }

  addFirearm(firearm: Firearm): Observable<Firearm> {
    return this.http.post<Firearm>(this.baseUrl, firearm);
  }

  //read all lost firearms
  getallLoss(): Observable<Loss[]> {
    return this.http.get<Loss[]>(this.lossUrl);
  }
  //to delete the firearm by id

  getAllCivillian(): Observable<Civillian[]> {
    return this.http.get<Civillian[]>(this.CivillianUrl);
  }

  getAllDestroyed(): Observable<Destroyed[]> {
    return this.http.get<Destroyed[]>(this.DestroyedUrl);
  }

  getAllPoag(): Observable<Poag[]> {
    return this.http.get<Poag[]>(this.PoagUrl);
  }

  getAllIofc(): Observable<Iofc[]> {
    return this.http.get<Iofc[]>(this.IofcUrl);
  }

  getAllHmts(): Observable<Hmts[]> {
    return this.http.get<Hmts[]>(this.HmtsUrl);
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

  postWithdrawalFirearm(): Observable<Withdraw[]> {
    return this.http.post<Withdraw[]>(this.postwithdrawFirearm, null);
  }   

  postFirearmHolder(): Observable<FirearmHolder[]> {
    return this.http.post<FirearmHolder[]>(this.postfirearmHolder, null);
  }    

  getFirearcmHolder(): Observable<FirearmHolder[]> {
    return this.http.get<FirearmHolder[]>(this.getfirearmHolder);
  }    

  postallOfficerPending(): Observable<OfficerPending[]> {
    return this.http.post<OfficerPending[]>(this.postOfficerPending, null);
  }    

  getallOfficerPending(): Observable<OfficerPending[]> {
    return this.http.get<OfficerPending[]>(this.getOfficerPending);
  }    
     
  
}   