import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../repository/hero';
import { HeroService } from '../repository/hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.tpl.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent {
  heroes: Hero[] = [];

  constructor(private _router:Router,private _heroService: HeroService) { }

  ngOnInit() {
    this._heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
  gotoDetail(hero: Hero) {
    let link = ['/detail', hero.id];
    this._router.navigate(link);
  }
}
