import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home';
import { NoContentComponent } from './pages/no-content';
import { ShowroomComponent } from './pages/showroom';
import { ResultComponent } from './pages/result';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'quiz',      loadChildren: './pages/quiz/quiz.module' },
  { path: 'result',      component: ResultComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'showroom',  component: ShowroomComponent },
  { path: '**',    component: NoContentComponent },
];
