import { Component, OnInit } from '@angular/core';
import { SuperPower } from '../superPower';
import { SuperpowerService } from '../superpower.service';

@Component({
  selector: 'app-superpowers',
  templateUrl: './superpowers.component.html',
  styleUrls: ['./superpowers.component.css']
})
export class SuperpowersComponent implements OnInit {

  superpowers : SuperPower[] = [];
  constructor(private superPowerService:SuperpowerService) { }

  getSuperPowers(): void{
    this.superPowerService.getSuperPowers().subscribe(x => this.superpowers = x);
  }

  ngOnInit(): void {
    this.getSuperPowers();
  }

}
