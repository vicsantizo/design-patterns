import { Car } from "./car";
import { DeliveryApp } from "./deliveryApp";
import { ITransport } from "./ITransport";

// Concrete Creator
export class CarDelivery extends DeliveryApp {
  constructor() {
    super();
  }

  public createProduct(): ITransport {
    return new Car("Mazda");
  }
}