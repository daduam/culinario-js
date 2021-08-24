import { Field, ObjectType } from "type-graphql";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Recipe } from "./Recipe";

@ObjectType()
@Entity()
export class Direction {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  step: number;

  @Field()
  @Column()
  text: string;

  @ManyToOne(() => Recipe, (recipe) => recipe.directions)
  recipe: Recipe;
}
