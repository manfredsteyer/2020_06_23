import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: 'input[city]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: CityValidatorDirective, multi: true }
  ]
})
export class CityValidatorDirective implements Validator {

  @Input('city') allowedTowns = [];

  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
    const city = control.value;

    if (this.allowedTowns.includes(city)) {
      return {};
    }
    else {
      return {
        city: {
          current: city,
          expected: this.allowedTowns
        }
      }
    }


  }


}
