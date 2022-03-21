import { HostListener, Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators'
import axios from 'axios';
import { yards1 } from './yards';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class YardsTableService implements OnDestroy {
  url!: string;
  property!: string;
  private yardsURL = 'https://mdm-location.azurewebsites.net/yardsgroup';

  constructor(private http: HttpClient) { }

  setMessage(data: any, a: any) {
    this.url = data;
    this.property = a;
  }

  getTable() {
    switch (this.property) {
      case "yardscodesearch":
        return axios.get(this.url);
      case "yardsnamesearch":
        return axios.get(this.url);
      case "yardsgroupsearch":
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
        return axios.get('https://mdm-location.azurewebsites.net/yards');
    }
  }

  addyards(newyards: yards1): Observable<yards1> {
    return this.http.post<yards1>(this.yardsURL, newyards, httpOptions).pipe(
      tap((yards: yards1) => console.log(`inserted yards = ${JSON.stringify(yards)}`)),
      catchError(error => of(new yards1()))
    );
  }
  @HostListener('unloaded')
    ngOnDestroy() {
        console.log('Cleared');
    }
}




