import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS, NG_ASYNC_VALIDATORS, AsyncValidator } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

import { FlightService } from '../flight-booking/flight-search/flight.service';

@Directive({
  selector: 'input[asyncCity]',
  providers: [
    { provide: NG_ASYNC_VALIDATORS, useExisting: AsyncCityValidatorDirective, multi: true }
  ]
})
export class AsyncCityValidatorDirective implements AsyncValidator {

  constructor(private flightService: FlightService) { }

  validate(control: AbstractControl): Observable<ValidationErrors> {

    return this.flightService.find(control.value, '').pipe(
      map(flights => flights.length > 0 ? {} : {asyncCity: true}),
      //delay(4000)
    );


  }


}
