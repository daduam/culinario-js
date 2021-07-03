import { User } from "../entities/User";
import {
  Arg,
  Field,
  InputType,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";
import { getManager } from "typeorm";
import { isEmail } from "class-validator";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

@InputType()
class RegisterInput {
  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  confirmPassword?: string;
}

@ObjectType()
class FieldError {
  @Field()
  field: "email" | "password" | "confirmPassword";

  @Field()
  message: string;
}

@ObjectType()
class DataResponse {
  @Field(() => User)
  user: User;

  @Field()
  token: string;
}

@ObjectType()
class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => DataResponse, { nullable: true })
  data?: DataResponse;
}

@Resolver()
export class UserResolver {
  @Query(() => String)
  async hello(): Promise<string> {
    return "hello world";
  }

  @Mutation(() => UserResponse)
  async register(
    @Arg("input") { email, password, confirmPassword }: RegisterInput
  ): Promise<UserResponse> {
    const errors: FieldError[] = [];
    if (!isEmail(email)) {
      errors.push({
        field: "email",
        message: "entered email is invalid",
      });
    }
    if (password != confirmPassword) {
      errors.push({
        field: "confirmPassword",
        message: "passwords do not match",
      });
    }
    if (errors.length !== 0) {
      return { errors };
    }
    const passwordHash = await bcrypt.hash(password, 10);
    const user = await getManager().create(User, {
      email,
      password: passwordHash,
    });
    const token = jwt.sign(
      { email: user.email, name: user.name },
      "fdasfkjdkfjlasldkfjdskfl",
      { expiresIn: "30 days" }
    );
    await getManager().save(user);
    return { data: { user, token } };
  }
}
