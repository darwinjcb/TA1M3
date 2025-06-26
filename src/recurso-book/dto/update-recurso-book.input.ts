import { CreateRecursoBookInput } from './create-recurso-book.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRecursoBookInput extends PartialType(CreateRecursoBookInput) {
  @Field(() => Int)
  id: number;
}
