import { Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Hero } from '../../repository/hero';
import { HeroService } from '../../repository/hero.service';


@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['hero-detail.component.css']
})
export class HeroDetailComponent {
    @Input() hero: Hero;
    @Output() close = new EventEmitter();
    error: any;
    navigated = false; // true if navigated here

    constructor(
      private heroService: HeroService,
      private route: ActivatedRoute) {
    }
    save() {
      this.heroService
        .save(this.hero)
        .then(hero => {
          this.hero = hero; // saved hero, w/ id if new
          this.goBack(hero);
        })
        .catch(error => this.error = error); // TODO: Display error message
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
          if (params['id'] !== undefined) {
            let id = +params['id'];
            this.navigated = true;
            this.heroService.getHero(id)
              .then(hero => this.hero = hero);
          } else {
            this.navigated = false;
            this.hero = new Hero();
          }
        });
      }

    goBack(savedHero: Hero = null) {
      this.close.emit(savedHero);
      if (this.navigated) { window.history.back(); }
    }

}
