export class Singleton {
  private static instance: Singleton;

  private constructor() { }

  public static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new this();
    }
    return Singleton.instance;
  }
}