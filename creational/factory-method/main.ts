import { CarDelivery } from "./carDelivery";
import { BikeDelivery } from "./bikeDelivery";
import { DeliveryApp } from "./deliveryApp";

function clientCode(creator: DeliveryApp) {
  creator.deliver();
}

console.log("DeliveryApp launched with car as delivery method");
clientCode(new CarDelivery());

console.log("DeliveryApp launched with bike as delivery method");
clientCode(new BikeDelivery());
