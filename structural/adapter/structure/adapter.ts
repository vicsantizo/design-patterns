// Adapter wraps the service which has an incompatible interface with the client 
// code in order to abstract the conversion logic

import { ITarget } from "./ITarget";
import { Service } from "./service";

export class Adapter implements ITarget {
  private service: Service;

  constructor(service: Service) {
    this.service = service;
  }

  public request(): string {
    let dayOfWeek = '';
    switch(this.service.specificRequest()) {
      case 1:
        dayOfWeek = 'Monday';
        break;
      case 2: 
        dayOfWeek = 'Tuesday';
        break;
      case 3: 
        dayOfWeek = 'Wednesday';
        break;
      case 4: 
        dayOfWeek = 'Thursday';
        break;
      case 5: 
        dayOfWeek = 'Friday';
        break;
      case 6: 
        dayOfWeek = 'Saturday';
        break;
      case 7:
        dayOfWeek = 'Sunday';
        break;
      default:
        dayOfWeek = 'Monday';
    }
    return dayOfWeek;
  }
}