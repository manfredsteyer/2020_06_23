import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateCityWithParams } from '../../shared/city-validator';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent implements OnInit {

  formGroup: FormGroup;

  metaData: any;
  id: string;
  showDetails: string;

  constructor(private fb: FormBuilder, private route: ActivatedRoute) { 



    this.route.params.subscribe(p => {
      this.id = p['id'];
      this.showDetails = p['showDetails'];
    });


    this.metaData = [
      { name: 'id', label: 'Id'},
      { name: 'from', label: 'Airport of Departure'},
      { name: 'to', label: 'Airport of Destination'},
      { name: 'date', label: 'Boarding Date'},

    ]

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



