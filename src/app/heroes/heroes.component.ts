import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // hero: Hero = {
  //   id: 1,
  //   name: 'windstorm',
  //   imagePath: ""
  // };

  clicked = 0;
  heroes = HEROES;
  selectedHero = this.heroes[0];

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  HandleClicked() {
    
    if (this.clicked % 2 === 0) {
    }
    else {
    }

    this.clicked++;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
