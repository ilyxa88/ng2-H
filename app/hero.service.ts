import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';



@Injectable()
export class HeroService {
  private _heroesUrl = 'app/heroes';  // URL to web api
  constructor(private _http: Http){}

  getHeroes() {
    return this._http.get(this._heroesUrl)
      .toPromise()
      .then(response => response.json().data as Hero[])
      .catch(this.handleError);
  }

  getHero(id: number) {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }
  // getHeroesSlowly() {
  //   return new Promise<Hero[]>(resolve =>
  //       setTimeout(() => resolve(HEROES), 2000) // 2 seconds
  //   );
  // }
  // Add new Hero
  save(hero: Hero): Promise<Hero>  {
    if (hero.id) {
      return this.put(hero);
    }
    return this.post(hero);
  }

  delete(hero: Hero) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this._heroesUrl}/${hero.id}`;

    return this._http
      .delete(url, {headers: headers})
      .toPromise()
      .catch(this.handleError);
  }

  private post(hero: Hero): Promise<Hero> {
    let headers = new Headers({
      'Content-Type': 'application/json'});

    return this._http
      .post(this._heroesUrl, JSON.stringify(hero), {headers: headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }
  // Update existing Hero
  private put(hero: Hero) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this._heroesUrl}/${hero.id}`;

    return this._http
      .put(url, JSON.stringify(hero), {headers: headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
