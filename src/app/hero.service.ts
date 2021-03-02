import { Injectable } from '@angular/core';
import { Hero } from './module/hero';
import { HEROES } from './data/mock-heroes';
import { Observable, of} from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService : MessageService) { }
  getHeroes() : Observable <Hero[]>{
    const heroes = of(HEROES);
    this.messageService.add('HeroeService: fetched heroes');
    return heroes;
  }

  getHero(id: number) : Observable<Hero>{
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
