// client interface - describes a protocol that other classes must follow to be able
// to collaborate with the client code

export interface ITemperatureProvider {
  getCurrentCelciusTemperature(): number;
}