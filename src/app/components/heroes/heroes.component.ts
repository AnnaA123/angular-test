import { Component, OnInit } from '@angular/core';
import { Hero } from './../../models/hero';
//import { HEROES } from './../placeholders/mock-heroes';
import { HeroService } from './../../services/hero.service';
import { MessageService } from './../../services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // old parts of the tutorial
  firstHero: Hero = {
    id: 1,
    name: 'Windstorm'
  }
  /*
  heroes = HEROES;
  */

  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id} ${hero.name}`)
  }

  getHeroes(): void {
    //this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}
