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
    return heroes;
  }
}
