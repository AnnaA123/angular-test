import { Component, OnInit, Input } from '@angular/core';
import { Task } from './../../models/Task';
import { faCoffee, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  faTimes = faTimes;
  faCoffee = faCoffee;

  constructor() { }

  ngOnInit(): void {
  }

}
