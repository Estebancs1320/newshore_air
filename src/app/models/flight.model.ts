import { Transport } from './transport.model';

export class Flight {
  transport: Transport;
  departureStation: string;
  arrivalStation: string;
  price: number;

  constructor(transport: Transport, origin: string, destination: string, price: number) {
    this.transport = transport;
    this.departureStation = origin;
    this.arrivalStation = destination;
    this.price = price;
  }
}
