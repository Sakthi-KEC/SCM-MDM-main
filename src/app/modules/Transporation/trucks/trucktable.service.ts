import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Trucks1 } from './trucks';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class TruckstableService {
  url!: string;
  property!: string;
  private TrucksURL = 'https://mdm-transportation.azurewebsites.net/trucks/';
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
      case "truckCodesearch":
        return axios.get(this.url);
      case "truckCountrysearch":
        return axios.get(this.url);
      case "truckOriginsearch":
        return axios.get(this.url);
      case "truckDestinationsearch":
        return axios.get(this.url);
        case "truckCapacitysearch":
          return axios.get(this.url);
        case "truckVendorsearch":
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
        return axios.get(this.TrucksURL);
    }
  }

  addTrucks(newTrucks: Trucks1): Observable<Trucks1> {
    return this.http.post<Trucks1>(this.TrucksURL, newTrucks, httpOptions).pipe(
      tap((Trucks: Trucks1) => console.log(`inserted Trucks = ${JSON.stringify(Trucks)}`)),
      catchError(error => of(new Trucks1()))
    );
  }

 }
