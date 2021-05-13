import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from './../../services/task-service.service';
import { Task } from './../../models/Task';
//import { TASKS } from './../../placeholders/mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  //tasks: Task[] = TASKS;
  tasks: Task[] = [];

  constructor(private taskService: TaskServiceService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

}
