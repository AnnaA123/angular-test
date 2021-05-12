import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './../models/hero';
import { HEROES } from './../components/placeholders/mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('Heroservice: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id) as Hero;
    this.messageService.add(`HeroService: fetched hero id=${hero.id}`);
    return of(hero);
  }

  /*
  getHeroes(): Hero[] {
    return HEROES;
  }
  */
}
