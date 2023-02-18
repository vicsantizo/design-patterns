import { IConnection } from "./IConnection";

export abstract class DatabaseConnection {
  public abstract createConnection(): IConnection;

  public init() {
    const database = this.createConnection();
    database.connect();
  }
}