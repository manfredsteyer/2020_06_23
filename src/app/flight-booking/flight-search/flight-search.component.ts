import { Component, OnInit } from '@angular/core';
import { Flight } from '../../model/flight';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { FlightService, DummyFlightService } from './flight.service';
import { Validators } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  // providers: [
  //   {
  //     provide: FlightService, 
  //        useClass: DummyFlightService,
  //   }
  // ]
})
export class FlightSearchComponent implements OnInit {

  from: string = 'G';
  to: string ='H';
  flights: Flight[] = [];
  selectedFlight: Flight;

  basket = {
    "3": true,
    "5": true
  };

  // private http: HttpClient

  constructor(private flightService: FlightService) { 
    // this.http = http;

  }

  ngOnInit(): void {
  }

  search(): void {


    if (!this.from || !this.to ) {
      return;
    }

    // this.flights = [
    //   { id: 17, from: 'Graz', to: 'Flagranti', date: '2020-06-23T17:00', delayed: false},
    //   { id: 18, from: 'Graz', to: 'Kognito', date: '2020-06-23T17:30', delayed: false},
    //   { id: 19, from: 'Graz', to: 'Mallorca', date: '2020-06-23T17:50', delayed: false},
    // ];

    this.flightService.find(this.from, this.to).subscribe({
      next: (flights) => {
        this.flights = flights;
      },
      error: (err) => {
        console.error('err', err);
      }
    });

    // ng update

  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }

}
