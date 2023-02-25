import { IBuilder } from "./IBuilder";
import { Product2 } from "./product2";

export class ConcreteBuilder2 implements IBuilder {
  private product: Product2;

  // The builder contains a blank product object
  constructor() {
    this.product = new Product2();
  }

  reset(): void {
    this.product = new Product2();
  }

  buildStepA(): void {
    this.product.parts.push('Special PartA');
  }

  buildStepB(): void {
    this.product.parts.push('Special PartB');
  }

  buildStepZ(): void {
    this.product.parts.push('Special PartC');
  }

  getProduct() {
    const result = this.product;
    this.reset();
    return result;
  }
  
}