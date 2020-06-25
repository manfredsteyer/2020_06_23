import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FlightSearchComponent } from './flight-booking/flight-search/flight-search.component';
import { FlightService, DefaultFlightService, DummyFlightService } from './flight-booking/flight-search/flight.service';
import { environment } from '../environments/environment';
import { CityPipe } from './shared/city.pipe';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { SharedModule } from './shared/shared.module';

//import { LoggerLibModule } from '@my/logger-lib';

const DEBUG = false;

@NgModule({
   imports: [
      BrowserModule,
      HttpClientModule,
      FlightBookingModule,
     // LoggerLibModule,
      SharedModule  // <flight-search></flight-search>
   ],
   declarations: [
      // "Shell:"
      AppComponent,
      SidebarComponent,
      NavbarComponent
   ],
   providers: [
      // { provide: FlightService, useClass: DummyFlightService }
      { 
         provide: FlightService, 
         useClass: DefaultFlightService
         // useFactory: (http: HttpClient) => {
         //    if (DEBUG) {
         //       return new DummyFlightService();
         //    }
         //    else {
         //       return new DefaultFlightService(http)
         //    }
         // },
         // deps: [HttpClient] 
   }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
