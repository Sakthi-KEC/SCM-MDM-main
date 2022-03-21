import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Trains1 } from './trains';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class TrainstableService {
  url!: string;
  property!: string;
  private TrainsURL = 'https://mdm-transportation.azurewebsites.net/transportation/train';
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
      case "trainsCodesearch":
        return axios.get(this.url);
      case "trainsCountrysearch":
        return axios.get(this.url);
      case "trainsOriginsearch":
        return axios.get(this.url);
      case "trainsDestinationsearch":
        return axios.get(this.url);
        case "trainsCapacitysearch":
          return axios.get(this.url);
        case "trainsVendorsearch":
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
        return axios.get(this.TrainsURL);
    }
  }

  addTrains(newTrains: Trains1): Observable<Trains1> {
    return this.http.post<Trains1>(this.TrainsURL, newTrains, httpOptions).pipe(
      tap((Trains: Trains1) => console.log(`inserted Trains = ${JSON.stringify(Trains)}`)),
      catchError(error => of(new Trains1()))
    );
  }

 }
