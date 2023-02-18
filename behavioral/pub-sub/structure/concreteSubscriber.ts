import { ISubscriber } from "../examples/newspaper/ISubscriber";

export class ConcreteSubscriber implements ISubscriber {
  public update(context?: unknown) {
    console.log(`Notified: ${context}`);
  }
}