import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../app/Hero';
import { MessagesService } from './messages.service';
import { HEROES } from './mock-heroes';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient, private MessagesService:MessagesService) { }

  // private log(message: string) {
  //   this.MessagesService.addMessage(`HeroService: ${message}`);
  // }

  // private heroesUrl = 'api/heroes';

  // getHeroes(): Observable<Hero[]> {
  //   return this.http.get<Hero[]>(this.heroesUrl)
  // }

  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  
  //     console.error(error);
  
  //     this.log(`${operation} failed: ${error.message}`);
  
  //     return of(result as T);
  //   };
  // }

  // Without DB
  getHeroes(): Observable<Hero[]>{
    const heroes = of(HEROES);
    this.MessagesService.addMessage("HeroService: Fetched heroes.")
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(x => x.id === id) as Hero;
    this.MessagesService.addMessage(`HeroService: Fetched hero: ${id} ${hero.name}`);
    return of(hero);
  }
}
