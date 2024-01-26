import { Component } from '@angular/core';
import { FlightService } from '../services/flight.service';
import { Flight } from '../models/flight.model';

@Component({
  selector: 'app-journey-form',
  templateUrl: './journey-form.component.html',
  styleUrls: ['./journey-form.component.css'],
})
export class JourneyFormComponent {
  origin: string = '';
  destination: string = '';
  flightsResponse: Flight[] = [];

  constructor(private flightService: FlightService) {}

  onSubmit(): void {
    if (this.isValidForm()) { 
      this.flightService.getJourneyRoute(this.origin, this.destination).subscribe(
        (response: Flight[]) => {
          this.flightsResponse = response;
          this.buildJourneyRoute();
          console.log(response);
        },
        (error: any) => {
          console.error('Error fetching journey route:', error);
        }
      );
    }
  }

  buildJourneyRoute(): void {
    
  }

  onInput(event: Event): void {
    // Asegúrate de que los valores ingresados estén siempre en mayúsculas
    const inputValue = (event.target as HTMLInputElement).value.toUpperCase();

    // Verifica si el evento proviene del campo de origen o destino
    const inputId = (event.target as HTMLInputElement).id;

    // Asigna el valor al campo correspondiente
    if (inputId === 'origin') {
      this.origin = inputValue;
    } else if (inputId === 'destination') {
      this.destination = inputValue;
    }
  }

  isValidForm(): boolean {
    // Verifica si los campos cumplen las reglas definidas
    return this.origin.length === 3 && this.destination.length === 3 && this.origin !== this.destination;
  }
}
