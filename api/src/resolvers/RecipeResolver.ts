import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { getManager } from "typeorm";
import { Recipe } from "../entities/Recipe";
import { User } from "../entities/User";
import { RecipeInput } from "./types/RecipeInput";

@Resolver()
export class RecipeResolver {
  @Mutation(() => Recipe, { nullable: true })
  async createRecipe(
    @Arg("recipe")
    { name, description, servings, ingredients, directions }: RecipeInput
  ): Promise<Recipe | null> {
    const savedRecipe = await getManager().transaction(async (tx) => {
      // get auth user from context
      const creatorId = 1;

      const creator = await tx.findOne(User, creatorId);

      if (!creator) {
        throw new Error(`User with id=${creatorId} does not exist`);
      }

      const result = await tx.query(
        `
          INSERT INTO "recipe" (name, description, servings, "creatorId")
          VALUES ($1, $2, $3, $4)
          RETURNING * 
        `,
        [name, description, servings, creatorId]
      );

      const savedRecipe = result[0] as Recipe;
      savedRecipe.creator = creator;

      savedRecipe.ingredients = [];
      ingredients.forEach(async (i) => {
        const result = await tx.query(
          `
            INSERT INTO "ingredient" (name, "recipeId")
            VALUES ($1, $2) 
            RETURNING *
          `,
          [i.name, savedRecipe.id]
        );
        savedRecipe.ingredients.push(result[0]);
      });

      savedRecipe.directions = [];
      directions.forEach(async (d) => {
        const result = await tx.query(
          `
            INSERT INTO "direction" (step, text, "recipeId")
            VALUES ($1, $2, $3) 
            RETURNING *
          `,
          [d.step, d.text, savedRecipe.id]
        );
        savedRecipe.directions.push(result[0]);
      });

      return savedRecipe;
    });

    return savedRecipe;
  }

  @Query(() => [Recipe])
  async allRecipes(@Arg("limit") limit: number): Promise<Array<Recipe> | null> {
    const recipes = await getManager().find(Recipe, {
      take: limit,
      relations: ["creator", "ingredients", "directions"],
    });

    return recipes;
  }
}
