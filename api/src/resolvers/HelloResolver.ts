import { User } from "../entities/User";
import { Query, Resolver } from "type-graphql";
import { getConnection } from "typeorm";

@Resolver()
export class HelloResolver {
  @Query(() => String)
  async hello(): Promise<string> {
    const users = await getConnection().manager.find(User);
    console.log(users);
    return "hello world";
  }
}
