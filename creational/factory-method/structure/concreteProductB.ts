import { IProduct } from "./IProduct";

export class ConcreteProductB implements IProduct {
  commonFunctionality(): void {
    console.log("Product B");
  }

}