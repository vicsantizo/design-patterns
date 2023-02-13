import { ISubscriber } from "./ISubscriber";

export class NewspaperReader implements ISubscriber {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(context: string): void {
    console.log(`${this.name}, a newspaper titled "${context}" has been issued!`);
  }
}