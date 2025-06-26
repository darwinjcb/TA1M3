import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RecursoBookService } from './recurso-book.service';
import { RecursoBook } from './entities/recurso-book.entity';
import { CreateRecursoBookInput } from './dto/create-recurso-book.input';

@Resolver(() => RecursoBook)
export class RecursoBookResolver {
  constructor(private readonly recursoBookService: RecursoBookService) {}

  @Mutation(() => RecursoBook)
  createRecursoBook(
    @Args('createRecursoBookInput') createRecursoBookInput: CreateRecursoBookInput,
  ): RecursoBook {
    return this.recursoBookService.create(createRecursoBookInput);
  }

  @Query(() => [RecursoBook], { name: 'recursoBooks' })
  findAll(): RecursoBook[] {
    return this.recursoBookService.findAll();
  }

  @Query(() => RecursoBook, { name: 'recursoBook', nullable: true })
  findOne(@Args('id', { type: () => Int }) id: number): RecursoBook | undefined {
    return this.recursoBookService.findOne(id);
  }
}
