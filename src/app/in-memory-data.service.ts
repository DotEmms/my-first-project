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
      {id:1, Name:"RayMan", Type:"XRay vision", IsOverpowered: true},
    {id:2, Name:"Ghost", Type:"Invisibility", IsOverpowered: false},
    {id:3, Name:"Hulk", Type:"Strength", IsOverpowered: true},
    {id:4, Name:"Zoof", Type:"Teleportation", IsOverpowered: false},
    {id:5, Name:"Shield", Type:"Bulletproof", IsOverpowered: true},
    {id:6, Name:"Flex", Type:"Elastic", IsOverpowered: true},
    {id:7, Name:"Storm", Type:"Weather Invoker", IsOverpowered: false},
    {id:8, Name:"Flash", Type:"Speed", IsOverpowered: true},
    {id:9, Name:"Diablo", Type:"Fire", IsOverpowered: true},
    {id:10, Name:"Squirt", Type:"Water", IsOverpowered: false},
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