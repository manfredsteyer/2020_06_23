import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flight } from '../../model/flight';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

export abstract class FlightService {
  abstract find(from: string, to: string): Observable<Flight[]>;
}


@Injectable()
export class DefaultFlightService implements FlightService {

  constructor(private http: HttpClient) { }

  find(from: string, to: string): Observable<Flight[]> {
    const url = 'http://www.angular.at/api/flight';
    const params = new HttpParams().set('from', from).set('to', to);
    const headers = new HttpHeaders().set('Accept', 'application/json');

    return this.http.get<Flight[]>(url, {params, headers} );
  }

}


@Injectable()
export class DummyFlightService implements FlightService {

  find(from: string, to: string): Observable<Flight[]> {

    return of([
      { id: 17, from: 'Graz', to: 'Flagranti', date: '2020-06-23T17:00', delayed: false},
      { id: 18, from: 'Graz', to: 'Kognito', date: '2020-06-23T17:30', delayed: false},
      { id: 19, from: 'Graz', to: 'Mallorca', date: '2020-06-23T17:50', delayed: false},
    ])
  }

}