import { Field, ObjectType } from "type-graphql";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Recipe } from "./Recipe";

@ObjectType()
@Entity()
export class Ingredient {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @ManyToOne(() => Recipe, (recipe) => recipe.ingredients)
  recipe: Recipe;
}
