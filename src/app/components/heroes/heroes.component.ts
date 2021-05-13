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

  /* old parts of the tutorial
  firstHero: Hero = {
    id: 1,
    name: 'Windstorm'
  }

  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id} ${hero.name}`)
  }
  */

  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    //this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    //---------------- added { id: null } since the hero model requires it
    this.heroService.addHero({ id: null, name } as Hero).subscribe(hero => {
      this.heroes.push(hero)
    });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

}
