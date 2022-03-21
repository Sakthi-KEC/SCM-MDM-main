
import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor() { 
      
  }
  toggleSideBar = () => {
    this.toggleSidebarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }
  @HostListener('unloaded')
    ngOnDestroy() {
        console.log('Cleared');
    }
}
