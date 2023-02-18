import { ITransport } from "./ITransport";

// concrete product
export class Car implements ITransport {
  private brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }

  drive(): string {
    return `A ${this.brand} CAR will be used`;
  }
}