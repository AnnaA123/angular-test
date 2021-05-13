import { Injectable } from '@angular/core';
import { Task } from './../models/Task';
import { TASKS } from './../placeholders/mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor() { }

  getTasks(): Task[] {
    return TASKS;
  }
}
