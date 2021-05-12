import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-tour-of-heroes',
  templateUrl: './second-tour-of-heroes.component.html',
  styleUrls: ['./second-tour-of-heroes.component.css']
})
export class SecondTourOfHeroesComponent implements OnInit {
  title = 'Tour of Heroes';

  constructor() { }

  ngOnInit(): void {
  }

}
