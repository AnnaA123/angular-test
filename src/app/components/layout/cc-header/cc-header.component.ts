import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cc-header',
  templateUrl: './cc-header.component.html',
  styleUrls: ['./cc-header.component.css']
})
export class CcHeaderComponent implements OnInit {
  title: string = 'Task Tracker'
  constructor() { }

  ngOnInit(): void {
  }

  toggleAddTask() {
    console.log('toggle');
  }

}
