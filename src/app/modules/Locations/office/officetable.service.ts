import { HostListener, Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators'
import axios from 'axios';
import { office1 } from './office';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class OfficeTableService implements OnDestroy {
  url!: string;
  property!: string;
  private officeURL = 'https://mdm-location.azurewebsites.net/officegroup';

  constructor(private http: HttpClient) { }

  setMessage(data: any, a: any) {
    this.url = data;
    this.property = a;
  }

  getTable() {
    switch (this.property) {
      case "officecodesearch":
        return axios.get(this.url);
      case "officecountrysearch":
        return axios.get(this.url);
      case "officecitysearch":
        return axios.get(this.url);
        case "officepinsearch":
        return axios.get(this.url);
      case "officecapacitysearch":
        return axios.get(this.url);
      case "officeareasearch":
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
        return axios.get('https://mdm-location.azurewebsites.net/office');
    }
  }

  addoffice(newoffice: office1): Observable<office1> {
    return this.http.post<office1>(this.officeURL, newoffice, httpOptions).pipe(
      tap((office: office1) => console.log(`inserted office = ${JSON.stringify(office)}`)),
      catchError(error => of(new office1()))
    );
  }
  @HostListener('unloaded')
    ngOnDestroy() {
        console.log('Cleared');
    }
}




