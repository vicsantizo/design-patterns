import { ISubscriber } from "./ISubscriber";

export interface IPublisher {
  subscribe(subscriber: ISubscriber): void
  unsubscribe(subscriber: ISubscriber): void;
  notify(context: unknown): void;
}