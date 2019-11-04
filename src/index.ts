import "reflect-metadata";
import { createConnection } from "typeorm";
import { GraphQLServer } from "graphql-yoga";
import { importSchema } from "graphql-import";
import * as path from "path";
import resolvers from "./resolvers/resolvers";

createConnection()
  .then(async connection => {
    console.log("Inserting a new user into the database...");

    console.log("Here you can setup and run express/koa/any other framework.");

    const typeDefs = importSchema(
      path.join(__dirname, "schema/schema.graphql")
    );

    const server = new GraphQLServer({ typeDefs, resolvers });
    server.start(() => {
      console.log("Server is running...");
    });

    connection.close();
  })
  .catch(error => console.log(error));
