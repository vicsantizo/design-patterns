import { IBuilder } from "./IBuilder";
import { Product1 } from "./product1";

export class ConcreteBuilder1 implements IBuilder {
  private product: Product1;

  // The builder contains a blank product object
  constructor() {
    this.product = new Product1();
  }

  reset(): void {
    this.product = new Product1();
  }

  buildStepA(): void {
    this.product.parts.push('PartA');
  }

  buildStepB(): void {
    this.product.parts.push('PartB');
  }

  buildStepZ(): void {
    this.product.parts.push('PartC');
  }

  getProduct() {
    const result = this.product;
    this.reset();
    return result;
  }
  
}