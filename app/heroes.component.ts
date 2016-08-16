import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.componen.html',
  styleUrls: ['heroes.component.css']
})
export class HeroesComponent{
  public heroes : Hero[];
  public selectedHero: Hero;
  public addingHero = false;
  public error: any;
  constructor(private _router:Router, private _heroService: HeroService){}
  onSelect (hero: Hero){
    this.selectedHero = hero;
  }
  getHeroes(){
    this._heroService.getHeroes().then(heroes=> {
      this.heroes = heroes
    });
  }
  ngOnInit() {
    this.getHeroes();
  }
  gotoDetail(hero: Hero) {
    let link = ['/detail', this.selectedHero.id];
    this._router.navigate(link);
  }
  addHero() {
    this.addingHero = true;
    this.selectedHero = null;
  }

  close(savedHero: Hero) {
    this.addingHero = false;
    if (savedHero) { this.getHeroes(); }
  }
  deleteHero(hero: Hero, event: any) {
    event.stopPropagation();
    this._heroService
      .delete(hero)
      .then(res => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      })
      .catch(error => this.error = error);
  }

}


