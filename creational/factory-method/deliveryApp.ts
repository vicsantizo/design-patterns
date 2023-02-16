import { ITransport } from "./ITransport";

// creator
export abstract class DeliveryApp {
  // Factory method
  public abstract createProduct(): ITransport;

  // Business logic that relies on product objects returned by the factory method
  public deliver() {
    const deliveryVehicle = this.createProduct();
    console.log("** Delivering... **");
    console.log(deliveryVehicle.drive());
  }
}