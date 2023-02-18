import { Bike } from "./bike";
import { DeliveryApp } from "./deliveryApp";
import { ITransport } from "./ITransport";

// Concrete Creator
export class BikeDelivery extends DeliveryApp {
  constructor() {
    super();
  }

  public createProduct(): ITransport {
    return new Bike("Trek");
  }
}