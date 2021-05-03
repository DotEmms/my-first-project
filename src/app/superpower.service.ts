import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';
import { SUPERPOWERS } from './mock-superpowers';
import { SuperPower } from './superPower';

@Injectable({
  providedIn: 'root'
})
export class SuperpowerService {

  private superpowersUrl = 'api/superpowers';
  constructor(private http: HttpClient, private messageService:MessagesService) { }

  getSuperPowers(): Observable<SuperPower[]>{
    const superpowers = this.http.get<SuperPower[]>(this.superpowersUrl);
    this.messageService.addMessage("SuperPowerService: Fetched superpowers");
    return superpowers;
  }

  getSuperPower(id: number): Observable<SuperPower>{
    const url = `${this.superpowersUrl}/${id}`;
    const superpower = this.http.get<SuperPower>(url);
    this.messageService.addMessage(`SuperPowerService: Fetched superpower with id: ${id}`);
    return superpower;
  }
}
