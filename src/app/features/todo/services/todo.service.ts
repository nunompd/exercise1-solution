import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ITodoItem } from '../interfaces/todo-items.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  getTodoItems(): Observable<ITodoItem[]> {
    return of([{ name: 'Task 1' }, { name: 'Task 2' }]);
  }
}
