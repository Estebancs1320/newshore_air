// flight.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flight } from '../models/flight.model';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  private apiUrl = 'https://recruiting-api.newshore.es/api/flights';

  constructor(private httpClient: HttpClient) {}

  getFlights(level: number): Observable<Flight[]> {
    const url = `${this.apiUrl}/${level}`;
    return this.httpClient.get<Flight[]>(url);
  }

  getJourneyRoute(origin: string, destination: string): Observable<Flight[]> {
    const url = `${this.apiUrl}/2`; // Usando la URL de rutas múltiples y de retorno como ejemplo
    return this.httpClient.get<Flight[]>(url);
  }
}
