import { Subsystem1 } from "./subsystem1";
import { Subsystem2 } from "./subsystem2";

// Simplified interface to a complex system of classes, 
// library, or framework
export class Facade {
  private subsystem1: Subsystem1;
  private subsystem2: Subsystem2;

  constructor(subsystem1: Subsystem1, subsystem2: Subsystem2) {
    this.subsystem1 = subsystem1;
    this.subsystem2 = subsystem2;
  }

  // Instead of using the two subsystems, now we'll call this method
  // that simplifies the subsystems complexity
  operation() {
    let backwardText = this.subsystem1.getBackwardText();
    let forwardText = this.subsystem2.reverseString(backwardText);
    return forwardText;
  }
}