import { IConnection } from "./IConnection";
import { MongoClient } from 'mongodb';

export class MongoConnection implements IConnection {
  private uri: string;

  constructor(uri: string) {
    this.uri = uri;
  }

  async connect(): Promise<void> {
    const uri = this.uri;
    const client = new MongoClient(uri);
    try {
      await client.connect();
      await this.listDatabases(client);
    } catch(e) {
      console.error(e);
    } finally {
      await client.close();
    }
  }

  async listDatabases(client: MongoClient) {
    const databasesList = await client.db().admin().listDatabases();
    console.log("Databases: ");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
  }

}