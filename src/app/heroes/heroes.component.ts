import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HeroService } from '../hero.service';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  clicked = 0;

  heroes: Hero[] = [];
  selectedHero?:Hero;

  //IsImageVisible = false;

  constructor(private HeroService: HeroService, private messageService: MessagesService) {
  }
    getHeroes(): void{
        this.HeroService.getHeroes().subscribe(x => this.heroes = x);
    }

    ngOnInit(): void {
      this.getHeroes();
    }
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.addMessage(`HeroService: Clicked on: ${hero.id} ${hero.name}`);
  // }

  

  //  HandleClicked() {
  //   if(this.selectedHero){
  //     if (this.clicked % 2 === 0) {
  //       this.selectedHero.imagePath = "http://placekitten.com/400/600";
  //       this.IsImageVisible = true;
  //     }
  //     else {
  //       this.selectedHero.imagePath = "http://placekitten.com/600/400";
  //       this.IsImageVisible = false;
  //     }
  //   }
  //     this.clicked++;
  //  }
  // HandleImageVisible(){
  //   this.IsImageVisible = !this.IsImageVisible;
  // }
  

}
