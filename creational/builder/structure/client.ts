import { ConcreteBuilder1 } from "./ConcreteBuilder1";
import { ConcreteBuilder2 } from "./concreteBuilder2";
import { Director } from "./director";

// Product1
const product1Builder = new ConcreteBuilder1();
const director = new Director(product1Builder);

console.log("Building Simple Product1: ");
director.buildSimpleProduct();
product1Builder.getProduct().printParts();


console.log("Building Product1 With all its functionalities: ");
director.buildProductWithFullFunctionality();
product1Builder.getProduct().printParts();

// Product2
const product2Builder = new ConcreteBuilder2();
director.changeBuilder(product2Builder);

console.log("Building Simple Product2: ");
director.buildSimpleProduct();
product2Builder.getProduct().printParts();


console.log("Building Product2 With all its functionalities: ");
director.buildProductWithFullFunctionality();
product2Builder.getProduct().printParts();
