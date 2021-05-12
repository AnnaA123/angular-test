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

  /*
  getHeroes(): Hero[] {
    return HEROES;
  }
  */
}
