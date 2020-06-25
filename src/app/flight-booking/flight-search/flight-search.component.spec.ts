import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightSearchComponent } from './flight-search.component';
import { FlightBookingModule } from '../flight-booking.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { FlightService, DefaultFlightService, DummyFlightService } from './flight.service';

// @Component({
//   selector: 'flight-card',
//   template: '<p>test</p>'
// })
// class DummyFlightCard {

// }



fdescribe('FlightSearchComponent', () => {
  let component: FlightSearchComponent;
  let fixture: ComponentFixture<FlightSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FlightBookingModule, 
        HttpClientModule, 
        SharedModule, 
        ReactiveFormsModule],
      declarations: [],
      providers: [
        { provide: FlightService, useClass: DummyFlightService }
      ]
    })
    .overrideComponent(
      FlightSearchComponent,
      {
        set: {
          providers: [
            { provide: FlightService, useClass: DummyFlightService }
          ]
        }
      }
    )
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should not have a selected flight initially', () => {
    expect(component.selectedFlight).toBeUndefined();
  });

  
  // Graz, Hamburg
  // Frankfurt, Berlin
  it('should search for flights when from and to given', () => {
    
    const flightService = TestBed.inject(FlightService);
    spyOn(flightService, 'find').and.callThrough(); //.returnValue([{id:17, from: 'A', to:'B', date: null}])

    component.from = 'Graz';
    component.to = 'Hamburg';
    component.search();
    expect(component.flights.length).toBe(3);

    expect(flightService.find).toHaveBeenCalled();
    expect(flightService.find).toHaveBeenCalledWith('Graz', 'Hamburg');

  });

  it('should not search for flights when from or to not given', () => {
    component.from = '';
    component.to = '';
    component.search();
    expect(component.flights.length).toBe(0);
  });

});
