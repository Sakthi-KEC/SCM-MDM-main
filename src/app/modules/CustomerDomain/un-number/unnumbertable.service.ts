import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Input } from '@angular/core';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { unnumber1 } from './un-number';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class UnnumbertableService {
  url!: string;
  property!: string;
  private unnumberURL = 'https://mdm-dangerouscargo.azurewebsites.net/unnumber';

  constructor(private http: HttpClient) { }

  setMessage(data: any, a: any) {
    this.url = data;
    this.property = a;
    console.log("Got url:" + this.url);
  }

  getTable() {
    console.log("Property" + this.property);
    switch (this.property) {
      case "ungroupcode":
        return axios.get(this.url);
      case "ungroupname":
        console.log(this.property);
        return axios.get(this.url);
      case "createdby":
        return axios.get(this.url);
      case "unname":
        return axios.get(this.url);
      case "date":
        return axios.get(this.url);
      case "search":
        {
          return axios.get(this.url);
        }
        case "savedsearch":
          {
            return axios.get(this.url);
          }
      default:
        return axios.get('https://mdm-dangerouscargo.azurewebsites.net/unnumber');
    }
  }

  addUnnumber(newUnnumber: unnumber1): Observable<unnumber1> {
    return this.http.post<unnumber1>(this.unnumberURL, newUnnumber, httpOptions).pipe(
      tap((unnumber: unnumber1) => console.log(`inserted UnNumber = ${JSON.stringify(unnumber)}`)),
      catchError(error => of(new unnumber1()))
    );
  }
}
