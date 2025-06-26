import { Injectable } from '@nestjs/common';
import { CreateRecursoBookInput } from './dto/create-recurso-book.input';
import { RecursoBook } from './entities/recurso-book.entity';

@Injectable()
export class RecursoBookService {
  private books: RecursoBook[] = [];
  private nextId = 1;

  create(createRecursoBookInput: CreateRecursoBookInput): RecursoBook {
    const newBook: RecursoBook = {
      id: this.nextId++,
      ...createRecursoBookInput,
    };
    this.books.push(newBook);
    return newBook;
  }

  findAll(): RecursoBook[] {
    return this.books;
  }



  findOne(id: number): RecursoBook | undefined {
    return this.books.find(book => book.id === id);
  }
}
