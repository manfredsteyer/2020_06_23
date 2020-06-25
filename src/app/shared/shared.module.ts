

import { NgModule } from '@angular/core';
import { CityPipe } from './city.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CityValidatorDirective } from './city-validator.directive';
import { RoundTripValidatorDirective } from './roundtrip-validator.directive';
import { AsyncCityValidatorDirective } from './async-city-validator.directive';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    ],
    declarations: [
        CityPipe, 
        CityValidatorDirective,
        RoundTripValidatorDirective,
        AsyncCityValidatorDirective
    ],
    providers: [],
    exports: [
        CityPipe,
        CommonModule,
        FormsModule,
        CityValidatorDirective,
        RoundTripValidatorDirective,
        AsyncCityValidatorDirective
    ],
})
export class SharedModule { }
