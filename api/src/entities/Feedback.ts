import { Field, ObjectType } from "type-graphql";
import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Recipe } from "./Recipe";
import { User } from "./User";

@ObjectType()
@Entity()
export class Feedback {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @PrimaryGeneratedColumn()
  text: string;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.feedbacks)
  creator: User;

  // replies
  // likes

  @ManyToOne(() => Recipe, (recipe) => recipe.feedbacks)
  recipe: Recipe;
}
