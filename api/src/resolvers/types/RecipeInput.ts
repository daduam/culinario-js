import { Field, InputType } from "type-graphql";
import { DirectionInput } from "./DirectionInput";
import { IngredientInput } from "./IngredientInput";

@InputType()
export class RecipeInput {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  servings: number;

  @Field(() => [IngredientInput])
  ingredients: IngredientInput[];

  @Field(() => [DirectionInput])
  directions: DirectionInput[];
}
