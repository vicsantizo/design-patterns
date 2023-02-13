import { IPublisher } from "./IPublisher";

export interface ISubscriber {
  update(context: unknown): void;
}