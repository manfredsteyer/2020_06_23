import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS, FormGroup } from '@angular/forms';

@Directive({
  selector: 'form[roundTrip]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: RoundTripValidatorDirective, multi: true }
  ]
})
export class RoundTripValidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
   
    const group = control as FormGroup;

    const from = group.controls['from'];
    const to = group.controls['to'];

    if (!from || !to) {
      return {}
    }

    if (from.value === to.value) {
      return {
        roundTrip: true
      }
    }

    return {};

  }


}
