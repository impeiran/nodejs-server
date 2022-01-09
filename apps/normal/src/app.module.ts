import { Module } from '@nestjs/common';
import { TodoListController } from './todo-list/todo-list.controller';

import { TodoListService } from './todo-list/todo-list.service';

@Module({
  imports: [],
  controllers: [TodoListController],
  providers: [TodoListService],
})
export class AppModule {}
