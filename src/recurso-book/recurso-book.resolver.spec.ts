import { Test, TestingModule } from '@nestjs/testing';
import { RecursoBookResolver } from './recurso-book.resolver';
import { RecursoBookService } from './recurso-book.service';

describe('RecursoBookResolver', () => {
  let resolver: RecursoBookResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecursoBookResolver, RecursoBookService],
    }).compile();

    resolver = module.get<RecursoBookResolver>(RecursoBookResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
