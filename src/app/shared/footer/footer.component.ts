import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent  {
  constructor() { }
  @HostListener('unloaded')
    ngOnDestroy() {
        console.log('Cleared');
    }
}
