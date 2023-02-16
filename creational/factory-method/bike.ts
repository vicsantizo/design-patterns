import { ITransport } from "./ITransport";

// concrete product
export class Bike implements ITransport {
  private brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }

  drive(): string {
    return `A ${this.brand} BIKE will be used`;
  }
}