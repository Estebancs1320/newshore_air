import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightListComponent } from './flight-list-component/flight-list.component';
import { FlightDetailsComponent } from './flight-details-component/flight-details.component';
import { FlightService } from './services/flight.service';
import { JourneyFormComponent } from './journey-form/journey-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FlightListComponent,
    FlightDetailsComponent,
    JourneyFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
