import { DatabaseConnection } from "./databaseConnection";
import { IConnection } from "./IConnection";
import { MongoConnection } from "./mongoConnection";

export class CreateMongoConnection extends DatabaseConnection {
  private uri: string; 
  
  constructor(uri: string) {
    super();
    this.uri = uri;
  }

  public createConnection(): IConnection {
    return new MongoConnection(this.uri);
  }
}