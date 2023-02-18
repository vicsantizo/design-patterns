import { ConcreteProductB } from "./concreteProductB";
import { Creator } from "./creator";
import { IProduct } from "./IProduct";

export class ConcreteCreatorB extends Creator {
  constructor() {
    super();
  }

  public createProduct(): IProduct {
    return new ConcreteProductB();
  }
}