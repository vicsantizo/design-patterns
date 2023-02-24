import { Singleton } from "./singleton";

let singleton1 = Singleton.getInstance();
let singleton2 = Singleton.getInstance();

if (singleton1 === singleton2) {
  console.log("Singleton applied succesfully");
} else {
  console.log("Singleton was not implemented correctly!");
}