import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateCityWithParams } from '../../shared/city-validator';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private fb: FormBuilder) { 

      this.formGroup = this.fb.group({
        id: [],
        from: ['Graz', 
          [
            Validators.required, 
            Validators.minLength(3),
            validateCityWithParams(['Graz', 'Hamburg', 'Zürich'])
          ],
          [ /* async */ ]
        ],
        to: ['Hamburg'],
        date: [],
        searchDetails: this.fb.group({
          maxStopOvers: [],
          lowBudged: []
        })

      });

      const myValidators = [ /* roundTrip, Gütersloh */ ];
      this.formGroup.validator = Validators.compose(myValidators);
      this.formGroup.asyncValidator = Validators.composeAsync([ /* ... */ ]);



      this.formGroup.valueChanges.subscribe(change => {
        console.debug('form changed: ', change);
      });

      this.formGroup.controls['from'].valueChanges.subscribe(change => {
        console.debug('from field changed', change);
      })


  }

  save() {
    console.debug('save', this.formGroup.value);
  }

  ngOnInit(): void {
  }

}



