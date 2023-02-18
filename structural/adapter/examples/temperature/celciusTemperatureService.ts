// Service that needs to be adapted
export class CelciusTemperatureService {
  public getCurrentTemperature() {
    const maxTemperature = 30;
    const minTemperature = 12;
    return Math.floor(Math.random() * (maxTemperature - minTemperature + 1) + minTemperature);
  }
}