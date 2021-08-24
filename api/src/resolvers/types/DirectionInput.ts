import { Field, InputType } from "type-graphql";
import { Direction } from "../../entities/Direction";

@InputType()
export class DirectionInput implements Partial<Direction> {
  @Field()
  step: number;

  @Field()
  text: string;
}
