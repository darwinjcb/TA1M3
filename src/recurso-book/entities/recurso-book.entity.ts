import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class RecursoBook {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  author: string;
}
