import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITodoItem } from '../../interfaces/todo-items.interface';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todoItems$: Observable<ITodoItem[]>;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoItems$ = this.todoService.getTodoItems();
  }
}
