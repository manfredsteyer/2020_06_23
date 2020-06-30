import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlightService, DefaultFlightService } from './flight-booking/flight-search/flight.service';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { OAuthModule } from 'angular-oauth2-oidc';

@NgModule({
   imports: [
      BrowserModule,
      HttpClientModule,
      OAuthModule.forRoot(),
      // FlightBookingModule, // Would prevent Lazy Loading
      RouterModule.forRoot(APP_ROUTES),
      SharedModule 
   ],
   declarations: [
      AppComponent,
      SidebarComponent,
      NavbarComponent,
      HomeComponent,
      AboutComponent,
      NotFoundComponent
   ],
   providers: [
      { 
         provide: FlightService, 
         useClass: DefaultFlightService
      }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
