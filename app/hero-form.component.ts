import { Component } from '@angular/core';
import { User }    from './hero.user';
import { HeroFormService } from './hero-form.service';

@Component({
  moduleId: module.id,
  selector: 'hero-form',
  templateUrl: 'hero-form.component.html'
})
export class HeroFormComponent {
  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];
  model = new User(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  submitted = false;
  //public name: string = 'ilya';
  constructor(private _heroFormService: HeroFormService){}
  onSubmit() {
    this._heroFormService.loginUser('ilya').then((user)=>{
      console.log(user);
    });
    this.submitted = true;
    console.log('submit');
  }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
