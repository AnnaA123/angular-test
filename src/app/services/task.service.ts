import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { Task } from './../models/Task';
import { TASKS } from './../placeholders/mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  //private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) { }
  /*
    getTasks(): Observable<Task[]> {
      return this.http.get<Task[]>(this.apiUrl);
    }
  */

  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS);
    return tasks;
  }
  /*
    getTasks(): Task[] {
      const tasks = of(TASKS);
      return tasks;
      //return TASKS;
    }
  */
}
