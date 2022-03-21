import { HostListener, Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators'
import axios from 'axios';
import { warehouse1 } from './warehouse';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class WarehouseTableService implements OnDestroy {
  url!: string;
  property!: string;
  private warehouseURL = 'https://mdm-location.azurewebsites.net/warehousegroup';

  constructor(private http: HttpClient) { }

  setMessage(data: any, a: any) {
    this.url = data;
    this.property = a;
  }

  getTable() {
    switch (this.property) {
      case "warehousecodesearch":
        return axios.get(this.url);
      case "warehousenamesearch":
        return axios.get(this.url);
      case "warehousegroupsearch":
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
        return axios.get('https://mdm-location.azurewebsites.net/warehouse');
    }
  }

  addwarehouse(newwarehouse: warehouse1): Observable<warehouse1> {
    return this.http.post<warehouse1>(this.warehouseURL, newwarehouse, httpOptions).pipe(
      tap((warehouse: warehouse1) => console.log(`inserted warehouse = ${JSON.stringify(warehouse)}`)),
      catchError(error => of(new warehouse1()))
    );
  }
  @HostListener('unloaded')
    ngOnDestroy() {
        console.log('Cleared');
    }
}




