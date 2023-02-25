import { Facade } from "./facade";
import { Subsystem1 } from "./subsystem1";
import { Subsystem2 } from "./subsystem2";

const subsystem1 = new Subsystem1();
const subsystem2 = new Subsystem2();
const facade = new Facade(subsystem1, subsystem2);

console.log(facade.operation());