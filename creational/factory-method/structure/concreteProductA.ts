import { IProduct } from "./IProduct";

export class ConcreteProductA implements IProduct {
  commonFunctionality(): void {
    console.log("Product A");
  }

}