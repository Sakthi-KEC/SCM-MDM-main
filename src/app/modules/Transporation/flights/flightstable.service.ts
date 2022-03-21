import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Flights1 } from './flights';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class flightstableService {
  url!: string;
  property!: string;
  private flightsURL = 'https://mdm-transportation.azurewebsites.net/transportation/flight';
  constructor(private http: HttpClient) { }
  setMessage(data: any,a:any) {
    this.url = data;
    this.property = a;
    console.log("Got url:" + this.url);
   console.log("Got property"+this.property);
  }

  getTable() {
   console.log("Property Name:  "+this.property);

    switch (this.property) {
      case "flightsCodesearch":
        return axios.get(this.url);
      case "flightsCountrysearch":
        return axios.get(this.url);
      case "flightsOriginsearch":
        return axios.get(this.url);
      case "flightsDestinationsearch":
        return axios.get(this.url);
        case "flightsCapacitysearch":
          return axios.get(this.url);
        case "flightsVendorsearch":
          return axios.get(this.url);
        case "costsearch":
          return axios.get(this.url);
        case "createdbysearch":
          return axios.get(this.url);
      case "search":
        {
          console.log("entered switch");
          console.log("URL is" +this.url);
          return axios.get(this.url);
        }
      case "savedsearch":
        {
          return axios.get(this.url);
        }

       
      default:
        console.log("Default");
        return axios.get(this.flightsURL);
    }
  }

  addflights(newflights: Flights1): Observable<Flights1> {
    return this.http.post<Flights1>(this.flightsURL, newflights, httpOptions).pipe(
      tap((flights: Flights1) => console.log(`inserted flights = ${JSON.stringify(flights)}`)),
      catchError(error => of(new Flights1()))
    );
  }

 }
