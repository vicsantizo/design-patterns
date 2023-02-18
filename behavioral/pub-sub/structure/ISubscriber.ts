export interface ISubscriber {
  update(context?: unknown): void;
}