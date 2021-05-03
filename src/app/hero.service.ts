import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../app/Hero';
import { MessagesService } from './messages.service';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private MessagesService:MessagesService) { }

  getHeroes(): Observable<Hero[]>{
    const heroes = of(HEROES);
    this.MessagesService.addMessage("HeroService: Fetched heroes.")
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(x => x.id === id) as Hero;
    this.MessagesService.addMessage(`HeroService: Clicked on: ${id} ${hero.name}`);
    return of(hero);
  }
}
