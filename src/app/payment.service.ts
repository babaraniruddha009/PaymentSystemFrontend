import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Biller } from '../app/masterbiller/Biller';
import { Bill} from '../app/newbiller/Bill';

import { environment } from 'src/environments/environment';
import { Accounts } from './accounts/Accounts';

@Injectable({providedIn: 'root'})
export class Service {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getBiller(): Observable<Biller[]> {
    return this.http.get<Biller[]>(`${this.apiServerUrl}/biller/list`);
  }

  public addBiller(biller: Biller): Observable<Biller> {
    return this.http.post<Biller>(`${this.apiServerUrl}/biller/new`, biller);
  }

  public getAccounts(): Observable<Accounts[]> {
    return this.http.get<Accounts[]>(`${this.apiServerUrl}/account/list`);
  }

  public getBill(): Observable<Bill[]> {
    return this.http.get<Bill[]>(`${this.apiServerUrl}/bill/list`);
  }

  public addBill(bill: Bill): Observable<Bill> {
    return this.http.post<Bill>(`${this.apiServerUrl}/bill/new`, bill);
  }

  
}
