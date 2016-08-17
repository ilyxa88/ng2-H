import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { User } from './hero.user';



@Injectable()
export class HeroFormService {
  private _heroesUrl = 'app/users';  // URL to web api
  constructor(private _http: Http){}

  loginUser(name: string){
    return this.getUsers()
      .then(users => users.find(user => user.name === name));
  }

  getUsers() {
    return this._http.get(this._heroesUrl)
      .toPromise()
      .then(response => response.json().data as User[])
      .catch(this.handleError);
  }

  getUser(id: number) {
    return this.getUsers()
      .then(users => users.find(user => user.id === id));
  }

  // Add new Hero
  // save(hero: Hero): Promise<Hero>  {
  //   if (hero.id) {
  //     return this.put(hero);
  //   }
  //   return this.post(hero);
  // }

  // delete(hero: Hero) {
  //   let headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //
  //   let url = `${this._heroesUrl}/${hero.id}`;
  //
  //   return this._http
  //     .delete(url, {headers: headers})
  //     .toPromise()
  //     .catch(this.handleError);
  // }

  // private post(hero: Hero): Promise<Hero> {
  //   let headers = new Headers({
  //     'Content-Type': 'application/json'});
  //
  //   return this._http
  //     .post(this._heroesUrl, JSON.stringify(hero), {headers: headers})
  //     .toPromise()
  //     .then(res => res.json().data)
  //     .catch(this.handleError);
  // }
  // Update existing Hero
  // private put(hero: Hero) {
  //   let headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //
  //   let url = `${this._heroesUrl}/${hero.id}`;
  //
  //   return this._http
  //     .put(url, JSON.stringify(hero), {headers: headers})
  //     .toPromise()
  //     .then(() => hero)
  //     .catch(this.handleError);
  // }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
