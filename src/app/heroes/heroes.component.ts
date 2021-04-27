import { Component, OnInit } from '@angular/core';
import {Hero} from '../Hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: "Windstorm",
    imgUrl: "./assets/cart.png",
  }

  isClicked = false;
  toggle = false;
  clicked = 0;

  HandleClicked(){
    this.isClicked = true;
  }

  HandleBtnClicked(){
    if(this.clicked % 2 === 0){
      this.toggle = true;
    this.hero.imgUrl = "./assets/home.png";
    }
    else{
      this.toggle = false;
    this.hero.imgUrl = "./assets/cart.png";
    }
    this.clicked++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
