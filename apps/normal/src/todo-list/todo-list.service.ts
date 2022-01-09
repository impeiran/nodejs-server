import { Injectable } from '@nestjs/common';
import { TodoItem } from './interface/todo-list';

@Injectable()
export class TodoListService {
  private readonly todoList: TodoItem[] = [
    {
      id: 123,
      content: '123',
      createTime: new Date().getTime().toString(),
    },
  ];

  create(todoItem: TodoItem) {
    this.todoList.push(todoItem);
  }

  findAll(): TodoItem[] {
    return this.todoList;
  }
}
