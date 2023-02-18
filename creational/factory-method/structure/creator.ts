import { IProduct } from "./IProduct";

export abstract class Creator {
  public abstract createProduct(): IProduct;

  public coreLogic() {
    const product = this.createProduct();
    product.commonFunctionality();
  }
}