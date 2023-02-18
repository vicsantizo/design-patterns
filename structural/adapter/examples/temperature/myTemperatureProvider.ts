import { CelciusToFarenheitAdapter } from "./celciusToFarenheitAdapter";
import { ITemperatureProvider } from "./ITemperatureProvider";

// client
export class MyTemperatureProvider implements ITemperatureProvider {
  private provider: ITemperatureProvider = new CelciusToFarenheitAdapter();

  getCurrentCelciusTemperature(): number {
    return this.provider.getCurrentCelciusTemperature();
  }

  setProvider(temperatureProvider: ITemperatureProvider) {
    this.provider = temperatureProvider;
  }
}