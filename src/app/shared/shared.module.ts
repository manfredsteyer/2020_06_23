

import { NgModule } from '@angular/core';
import { CityPipe } from './city.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    ],
    declarations: [CityPipe],
    providers: [],
    exports: [
        CityPipe,
        CommonModule,
        FormsModule,
    ],
})
export class SharedModule { }
