import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  private todos = [];

  create(createTodoDto: CreateTodoDto) {
    console.log('Adding a new todo:', createTodoDto);

    const newTodo = {
      id: this.todos.length + 1, // Arrays are zero-based, so the next id is the length of the array plus one
      ...createTodoDto,
    };
    this.todos.push(newTodo);

    return newTodo;
  }

  findAll() {
    console.log('Returning all todos:', this.todos);

    return this.todos;
  }

  findOne(id: number) {
    console.log(`Finding a todo with id = #${id}`);

    return this.todos.find((todo) => todo.id === id);
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    console.log(`Updating a todo with id = #${id}`);

    const todoIndex = this.todos.findIndex(todo => todo.id === id);
    if (todoIndex > -1) {
      this.todos[todoIndex] = { ...this.todos[todoIndex], ...updateTodoDto };
      return this.todos[todoIndex];
    }
    return null;
  }

  remove(id: number) {
    console.log(`removes a todo with id = #${id}`);

    const todoIndex = this.todos.findIndex((todo) => todo.id === id);
    if (todoIndex > -1) {
      const removedTodo = this.todos.splice(todoIndex, 1);
      return removedTodo[0];
    }
    return null;
  }
}
