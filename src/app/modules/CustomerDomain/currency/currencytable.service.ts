import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Currency1} from './currency';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class CurrencytableService {
  url!: string;
  property!: string;
  private currencyURL = 'https://mdm-currencyconversion.azurewebsites.net/currencyconversion/';
  constructor(private http: HttpClient) { }
  setMessage(data: any,a:any) {
    this.url = data;
    this.property = a;
    console.log("Got url:" + this.url);
   console.log("Got property"+this.property);
  }

  getTable() {
   console.log("Property Name:  "+this.property);
   //return axios.get(this.url);
    switch (this.property) {
      case "conversionnamesearch":
        return axios.get(this.url);
      case "conversionkeysearch":
        return axios.get(this.url);
      case "conversionfactorsearch":
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
         // console.log("URL is" +this.url);
          return axios.get(this.url);
        }
        // case "CNY":
        // {
        //   console.log("INR case");
        //   return axios.get(this.url);
        // }
        // case "EURO":
        // {
        //   console.log("INR case");
        //   return axios.get(this.url);
        // }

       
      default:
        console.log("Default");
        return axios.get(this.currencyURL);
    }
  }

  addCurrency(newCurrency: Currency1): Observable<Currency1> {
    return this.http.post<Currency1>(this.currencyURL, newCurrency, httpOptions).pipe(
      tap((currency: Currency1) => console.log(`inserted Currency = ${JSON.stringify(currency)}`)),
      catchError(error => of(new Currency1()))
    );
  }

 }
