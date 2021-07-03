import { Field, ObjectType } from "type-graphql";
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@ObjectType()
@Entity()
export class User {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ nullable: true })
  @Column({ nullable: true })
  name?: string;

  @Field()
  @Column({ unique: true })
  email: string;

  // @Field({ nullable: true })
  @Column({ nullable: true })
  password?: string;

  // unclear how to handle phone numbers for now
  // should probably be a custom data type with various fields
  // @Column({unique: true })
  // phoneNumber: string;

  // custom type for countries with validation?
  // @Column()
  // country: string;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
