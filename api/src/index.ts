import "reflect-metadata";
import express from "express";
import { ApolloServer, ServerRegistration } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";

import { resolvers } from "./resolvers";

const bootstrap = async () => {
  const app = express();

  try {
    const connection = await createConnection();
    await connection.synchronize(true);
    console.log("connected to database");
  } catch (error) {
    console.error(error);
  }

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers,
      validate: false,
    }),
  });

  apolloServer.applyMiddleware({ app } as ServerRegistration);

  app.listen(8080, () => {
    console.log(`Listening at http://localhost:8080`);
  });
};

bootstrap().catch((error) => console.error(error));
