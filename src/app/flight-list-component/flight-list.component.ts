import { Component, OnInit } from '@angular/core';
import { FlightService } from '../services/flight.service';
import { Flight } from '../models/flight.model';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css'],
})
export class FlightListComponent implements OnInit {
  flights: Flight[] = [];

  constructor(private flightService: FlightService) {}

  ngOnInit(): void {
    this.getFlights();
  }

  private getFlights(): void {
    this.flightService.getFlights(0).subscribe(
      (response) => {
        this.flights = response;
        console.log('Flights:', this.flights);
      },
      (error) => {
        console.error('Error fetching flights:', error);
      }
    );
  }
}
