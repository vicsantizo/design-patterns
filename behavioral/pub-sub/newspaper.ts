import { IPublisher } from "./IPublisher";
import { ISubscriber } from "./ISubscriber";

export class Newspaper implements IPublisher {
  private subscribers: ISubscriber[] = [];
  private newspaperReleases: string[] = [];

  constructor(subscribers: ISubscriber[] = []) {
    this.subscribers = subscribers;
  }

  subscribe(subscriber: ISubscriber): void {
    const isSubscribed = this.subscribers.includes(subscriber);
    if (isSubscribed) {
      console.log('You have subscribed already');
      return;
    }
    this.subscribers.push(subscriber);
    console.log('Succesfylly subscribed');
  }

  unsubscribe(subscriber: ISubscriber): void {
    const subscriberIndex = this.subscribers.indexOf(subscriber);
    if (subscriberIndex === -1) {
      console.log('Already unsubscribed');
      return;
    }
    this.subscribers.splice(subscriberIndex, 1);
  }

  // context will contain any contextual information for the subscribe to use
  notify(context: unknown): void {
    this.subscribers.forEach(subscriber => subscriber.update(this.getLatestRelease()));
  }

  getLatestRelease() {
    const numberOfNewspaperReleased = this.newspaperReleases.length;
    return this.newspaperReleases[numberOfNewspaperReleased - 1];
  }

  // Event that happens which the newspaper wants to notify to readers
  releaseNewspaper(title: string) {
    this.newspaperReleases.push(title);
    this.notify(title);
  }
}
