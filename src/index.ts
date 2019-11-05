import "reflect-metadata";
import { createConnection } from "typeorm";
import { GraphQLServer } from "graphql-yoga";
import { importSchema } from "graphql-import";
import * as path from "path";
import resolvers from "./resolvers/resolvers";

const connectionObject =
  process.env.NODE_ENV_PORT === "4000"
    ? require("../ormconfig.json")
    : require("../ormconfigtest.json");

export async function startServer() {
  await createConnection(connectionObject);

  const typeDefs = importSchema(path.join(__dirname, "schema/schema.graphql"));

  const server = new GraphQLServer({ typeDefs, resolvers });
  await server.start({
    port: process.env.NODE_ENV_PORT
  });
  console.log("Server is running...");
}

startServer();
