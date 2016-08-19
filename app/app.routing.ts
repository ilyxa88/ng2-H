import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { HeroFormComponent } from './login/hero-form.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: HeroFormComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];
export const routing = RouterModule.forRoot(appRoutes);

