import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../Hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
  }

  searchHero(query: string){
    throw new Error('Not implemented');
  }

}
