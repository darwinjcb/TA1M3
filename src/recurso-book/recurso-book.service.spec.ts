import { Test, TestingModule } from '@nestjs/testing';
import { RecursoBookService } from './recurso-book.service';

describe('RecursoBookService', () => {
  let service: RecursoBookService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecursoBookService],
    }).compile();

    service = module.get<RecursoBookService>(RecursoBookService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
