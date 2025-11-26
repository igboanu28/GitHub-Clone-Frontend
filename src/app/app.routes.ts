import { Routes } from '@angular/router';
import { Overview } from './pages/personal/overview/overview';
import { Packages } from './pages/personal/packages/packages';
import { Projects } from './pages/personal/projects/projects';
import { Repositories } from './pages/personal/repositories/repositories';
import { Stars } from './pages/personal/stars/stars';
import { Home } from './pages/global/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Overview,
  },
  {
    path: 'packages',
    component: Packages,
  },
  {
    path: 'projects',
    component: Projects,
  },
  {
    path: 'repositories',
    component: Repositories,
  },
  {
    path: 'stars',
    component: Stars,
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path
  }
];
