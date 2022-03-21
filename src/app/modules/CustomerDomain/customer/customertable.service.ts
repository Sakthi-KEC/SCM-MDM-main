import { HostListener, Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators'
import axios from 'axios';
import { customer1 } from './customer';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CustomerTableService implements OnDestroy {
  url!: string;
  property!: string;
  private customerURL = 'https://mdm-customer.azurewebsites.net/customergroup';

  constructor(private http: HttpClient) { }

  setMessage(data: any, a: any) {
    this.url = data;
    this.property = a;
  }

  getTable() {
    switch (this.property) {
      case "customercodesearch":
        return axios.get(this.url);
      case "customernamesearch":
        return axios.get(this.url);
      case "customerdomainsearch":
        return axios.get(this.url);
      case "createdbysearch":
        return axios.get(this.url);
      case "datesearch":
        return axios.get(this.url);
      case "search":
        return axios.get(this.url);
      case "savedsearch":
          return axios.get(this.url);
      default:
        return axios.get('https://mdm-customer.azurewebsites.net/customer');
    }
  }

  addcustomer(newcustomer: customer1): Observable<customer1> {
    return this.http.post<customer1>(this.customerURL, newcustomer, httpOptions).pipe(
      tap((customer: customer1) => console.log(`inserted customer = ${JSON.stringify(customer)}`)),
      catchError(error => of(new customer1()))
    );
  }
  @HostListener('unloaded')
    ngOnDestroy() {
        console.log('Cleared');
    }
}




