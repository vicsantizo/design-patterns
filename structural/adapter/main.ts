import { MyTemperatureProvider } from "./myTemperatureProvider";

const temperatureProvider = new MyTemperatureProvider();
const currentTemperature = temperatureProvider.getCurrentCelciusTemperature();
console.log(currentTemperature);
