import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private router: Router) { }

  getCommodity() {
    this.router.navigate(['/commodity']);
  }
  getunNumber() {
    this.router.navigate(['/unnumber']);
  }
  getCurrency() {
    this.router.navigate(['/currency']);
  }
  getTrucks() {
    this.router.navigate(['/trucks']);
  }
  getShips() {
    this.router.navigate(['/ships']);
  }
  getTrains() {
    this.router.navigate(['/trains']);
  }
  getFlights() {
    this.router.navigate(['/flights']);
  }
  getWarehouse() {
    this.router.navigate(['/warehouse']);
  }
  getYards() {
    this.router.navigate(['/yards']);
  }
  getOffices() {
    this.router.navigate(['/office']);
  }
  getCustomer() {
    this.router.navigate(['/customer']);
  }
  @HostListener('unloaded')
    ngOnDestroy() {
        console.log('Cleared');
    }
}
