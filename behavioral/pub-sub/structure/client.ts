import { ConcreteSubscriber } from "./concreteSubscriber";
import { Publisher } from "./publisher";

const publisher = new Publisher();
const subscriber1 = new ConcreteSubscriber();
const subscriber2 = new ConcreteSubscriber();

publisher.subscribe(subscriber1);
publisher.subscribe(subscriber2);
publisher.notify("test");