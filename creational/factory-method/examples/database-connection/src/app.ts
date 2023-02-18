import { CreateMongoConnection } from "./createMongoConnection";
import { DatabaseConnection } from "./databaseConnection";

function initializeConnection(database: DatabaseConnection) {
  database.init();
}

/**
 * Successfully decoupled the database using the factory-method, now new functionality can be 
 * added to the creator class (databaseConnection) to perform core business logic without being
 * dependent on the database being used.
 */

initializeConnection(new CreateMongoConnection('<my-uri>'));