import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';
import { SUPERPOWERS } from './mock-superpowers';
import { SuperPower } from './superPower';

@Injectable({
  providedIn: 'root'
})
export class SuperpowerService {

  constructor(private messageService:MessagesService) { }

  getSuperPowers(): Observable<SuperPower[]>{
    const superpowers = of(SUPERPOWERS);
    this.messageService.addMessage("SuperPowerService: Fetched superpowers");
    return superpowers;
  }

  getSuperPower(id: number): Observable<SuperPower>{
    const superpower = SUPERPOWERS.find(x => x.id === id) as SuperPower;
    this.messageService.addMessage(`SuperPowerService: Fetched superpower: ${id} ${superpower.Name}`);
    return of(superpower);
  }
}
