import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, XHRBackend }     from '@angular/http';

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService }               from './api/in-memory-data.service';

import { AppComponent }   from './app.component';
import { routing }        from './app.routing';

import { HeroService }          from './repository/hero.service';
import { HeroFormService }      from './login/hero-form.service';
import {LocalStorageService} from 'angular2-localstorage/LocalStorageEmitter';

import { HeroDetailComponent }  from './heroes/hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroSearchComponent } from './dashboard/hero-search/hero-search.component';
import { HeroFormComponent } from './login/hero-form.component';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    HeroFormComponent
  ],
  providers: [
   // LocalStorageService,
    HeroService,
    HeroFormService,
    { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    { provide: SEED_DATA,  useClass: InMemoryDataService }     // in-mem server data
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
