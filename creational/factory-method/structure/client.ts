import { ConcreteCreatorA } from "./concreteCreatorA";
import { ConcreteCreatorB } from "./concreteCreatorB";
import { Creator } from "./creator";

function clientCode(creator: Creator) {
  creator.coreLogic();
}

clientCode(new ConcreteCreatorB());
clientCode(new ConcreteCreatorA());