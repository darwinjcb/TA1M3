import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateRecursoBookInput {
  @Field()
  title: string;

  @Field()
  author: string;
}
