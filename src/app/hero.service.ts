import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  constructor(private messageService: MessageService) { }
  
  getHeroes(): Observable<Hero[]>{
    const heroes = of(HEROES);
    this.messageService.add('HeroService fetched the Heroes');
    return heroes;
  }
  
  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id == id)!;
    this.messageService.add(`We grabbed hero with id of ${id}`)
    return of(hero)
  }

}
