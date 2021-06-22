import "reflect-metadata";
import express from "express";
import { ApolloServer, ServerRegistration } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import HelloResolver from "./resolvers/HelloResolver";

const bootstrap = async () => {
  const app = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver],
      validate: false,
    }),
  });

  apolloServer.applyMiddleware({ app } as ServerRegistration);

  app.listen(8080, () => {
    console.log(`Listening at http://localhost:8080`);
  });
};

bootstrap().catch((error) => console.error(error));
