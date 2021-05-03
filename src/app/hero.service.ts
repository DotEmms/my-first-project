import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

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
    return this.http.put(this.heroesUrl, hero, this.httpOptions);
  }
  
}