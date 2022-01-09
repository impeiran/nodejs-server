import { Controller, Get, HttpStatus } from '@nestjs/common';
import { TodoListService } from './todo-list.service';

@Controller('todo')
export class TodoListController {
  constructor(private todoListService: TodoListService) {}

  @Get('create')
  create() {
    this.todoListService.create({
      id: 999,
      content: 'hahah',
      createTime: new Date().getTime().toString(),
    });
    return {
      code: HttpStatus.OK,
    };
  }

  @Get('all')
  queryAll() {
    return this.todoListService.findAll();
  }
}
