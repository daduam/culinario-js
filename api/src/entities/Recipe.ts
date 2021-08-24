import { Field, ObjectType } from "type-graphql";
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Direction } from "./Direction";
import { Feedback } from "./Feedback";
import { Ingredient } from "./Ingredient";
import { User } from "./User";

@ObjectType()
@Entity()
export class Recipe {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  description: string;

  @Field(() => [Ingredient])
  @OneToMany(() => Ingredient, (ingredient) => ingredient.recipe)
  ingredients: Ingredient[];

  @Field(() => [Direction])
  @OneToMany(() => Direction, (direction) => direction.recipe)
  directions: Direction[];

  @Field(() => [Feedback])
  @OneToMany(() => Feedback, (feedback) => feedback.recipe)
  feedbacks: Feedback[];

  @Field()
  @Column()
  servings: number;

  // prep time

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.recipes)
  creator: User;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;

  // @Field(() => String, { nullable: true })
  // @DeleteDateColumn({ nullable: true })
  // deletedAt: Date;
}
