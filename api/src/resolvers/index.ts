import { RecipeResolver } from "./RecipeResolver";
import { UserResolver } from "./UserResolver";

const resolvers = [UserResolver, RecipeResolver] as const;

export default resolvers;
