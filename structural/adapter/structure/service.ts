// the service has useful behavior, however, the interface is incompatible
// with the client code

export class Service {
  public specificRequest(): number {
    const randomNumberFromOneToSeven = Math.floor(Math.random() * 7 + 1);
    return randomNumberFromOneToSeven;
  }
}