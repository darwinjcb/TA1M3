import { Module } from '@nestjs/common';
import { RecursoBookService } from './recurso-book.service';
import { RecursoBookResolver } from './recurso-book.resolver';

@Module({
  providers: [RecursoBookResolver, RecursoBookService],
})
export class RecursoBookModule {}
