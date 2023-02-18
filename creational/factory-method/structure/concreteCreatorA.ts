import { ConcreteProductA } from "./concreteProductA";
import { Creator } from "./creator";
import { IProduct } from "./IProduct";

export class ConcreteCreatorA extends Creator {
  constructor() {
    super();
  }

  public createProduct(): IProduct {
    return new ConcreteProductA();
  }
}