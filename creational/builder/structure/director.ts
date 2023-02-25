import { IBuilder } from "./IBuilder";

export class Director {
  private builder: IBuilder;

  constructor(builder: IBuilder) {
    this.builder = builder;
  }

  changeBuilder(builder: IBuilder) {
    this.builder = builder;
  }

  buildSimpleProduct() {
    this.builder.buildStepA();
  }

  buildProductWithFullFunctionality() {
    this.builder.buildStepA();
    this.builder.buildStepB();
    this.builder.buildStepZ();
  }

}