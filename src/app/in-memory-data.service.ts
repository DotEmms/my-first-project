import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './Hero';
import { SuperPower } from './superPower';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    const superpowers: SuperPower[] = [
      {id:1, name:"RayMan", type:"XRay vision", isOverpowered: true},
    {id:2, name:"Ghost", type:"Invisibility", isOverpowered: false},
    {id:3, name:"Hulk", type:"Strength", isOverpowered: true},
    {id:4, name:"Zoof", type:"Teleportation", isOverpowered: false},
    {id:5, name:"Shield", type:"Bulletproof", isOverpowered: true},
    {id:6, name:"Flex", type:"Elastic", isOverpowered: true},
    {id:7, name:"Storm", type:"Weather Invoker", isOverpowered: false},
    {id:8, name:"Flash", type:"Speed", isOverpowered: true},
    {id:9, name:"Diablo", type:"Fire", isOverpowered: true},
    {id:10, name:"Squirt", type:"Water", isOverpowered: false},
    ]
    return {heroes, superpowers};
    
  }
    
  
  constructor(){}
  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}