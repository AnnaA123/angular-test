import { Component, OnInit } from '@angular/core';
import { Hero } from './../../models/hero';
import { HEROES } from './../placeholders/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  firstHero: Hero = {
    id: 1,
    name: 'Windstorm'
  }

  heroes = HEROES;
  selectedHero?: Hero;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
