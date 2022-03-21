import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Ships1 } from './ships';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ShipstableService {
  url!: string;
  property!: string;
  private ShipsURL = 'https://mdm-transportation.azurewebsites.net/transpotation/ship';
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
      case "shipsCodesearch":
        return axios.get(this.url);
      case "shipsCountrysearch":
        return axios.get(this.url);
      case "shipsOriginsearch":
        return axios.get(this.url);
      case "shipsDestinationsearch":
        return axios.get(this.url);
        case "shipsCapacitysearch":
          return axios.get(this.url);
        case "shipsVendorsearch":
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
        return axios.get(this.ShipsURL);
    }
  }

  addShips(newShips: Ships1): Observable<Ships1> {
    return this.http.post<Ships1>(this.ShipsURL, newShips, httpOptions).pipe(
      tap((Ships: Ships1) => console.log(`inserted Ships = ${JSON.stringify(Ships)}`)),
      catchError(error => of(new Ships1()))
    );
  }

 }
