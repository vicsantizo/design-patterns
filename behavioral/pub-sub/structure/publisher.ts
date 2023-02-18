import { IPublisher } from "../examples/newspaper/IPublisher";
import { ISubscriber } from "../examples/newspaper/ISubscriber";

export class Publisher implements IPublisher {
  private subscribers: ISubscriber[] = [];
  
  subscribe(subscriber: ISubscriber): void {
    const isAlreadySubscribed = this.subscribers.includes(subscriber)
    if (isAlreadySubscribed) {
      return;
    }
    this.subscribers.push(subscriber);
    console.log("Registered a new subscriber");
  }

  unsubscribe(subscriber: ISubscriber): void {
    const subscriberIndex = this.subscribers.indexOf(subscriber);
    const isSubscriberSubscribed = subscriberIndex === -1 ? true : false;
    if (isSubscriberSubscribed) {
      this.subscribers.splice(subscriberIndex, 1);
      console.log('Unsubscribed');
      return;
    }
    console.log('Already unsubscribed');
  }

  notify(context: string): void {
    this.subscribers.map((subscriber) => {
      subscriber.update(`notification ${context}`);
    })
  }

}