import { ISubscriber } from "../examples/newspaper/ISubscriber";

export interface IPublisher {
  subscribe(subscriber: ISubscriber): void;
  unsubscribe(subscriber: ISubscriber): void;
  notifySubscribers(context: unknown): void;
}