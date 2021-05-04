import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Hero } from './Hero';
import { MessagesService } from './messages.service';


@Injectable({ providedIn: 'root' })
export class HeroService {

  private heroesUrl = 'api/heroes';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }; 

  constructor(private http: HttpClient, private messagesService: MessagesService) { }

  getHeroes(): Observable<Hero[]>{
    const heroes = this.http.get<Hero[]>(this.heroesUrl);
    this.messagesService.addMessage('HeroService: Fetched heroes');
    return heroes;
  }


  getHero(id: number): Observable<Hero>{
    const url = `${this.heroesUrl}/${id}`;
    const hero = this.http.get<Hero>(url);
    this.messagesService.addMessage(`HeroService: Fetched hero with id: ${id}`);
    return hero;  
  }

  updateHero(hero?: Hero): Observable<any>{
    this.messagesService.addMessage(`HeroService: Updated hero: ${hero?.name}`);
    return this.http.put(this.heroesUrl, hero, this.httpOptions);
  }
  
  addHero(hero: Hero): Observable<Hero>{
    this.messagesService.addMessage(`HeroService: Added hero: ${hero?.name}`);
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions);

  }

  deleteHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    this.messagesService.addMessage(`HeroService: Deleted hero with id: ${id}`);
    return this.http.delete<Hero>(url, this.httpOptions);
  };
}