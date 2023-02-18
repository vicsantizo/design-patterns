import { CelciusTemperatureService } from "./celciusTemperatureService";
import { ITemperatureProvider } from "./ITemperatureProvider";

// Adapter implements the client interface to avoid coupling to a concrete adapter class
// making it easier to switch adapters
export class CelciusToFarenheitAdapter implements ITemperatureProvider {
  private adaptee = new CelciusTemperatureService();
  
  getCurrentCelciusTemperature(): number {
    return Math.round(this.adaptee.getCurrentTemperature() * (9 / 5) + 32);
  }
}