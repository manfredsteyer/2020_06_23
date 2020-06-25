import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Hello World!!!!';

  constructor(private router: Router) {
    this.router.events.subscribe(event => console.debug('event', event));
  }
}

