import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home';
import { NoContentComponent } from './pages/no-content';
import { ShowroomComponent } from './pages/showroom';
import { QuizComponent } from './pages/quiz';

export const ROUTES: Routes = [
  { path: '',      component: QuizComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'showroom',  component: ShowroomComponent },
  { path: '**',    component: NoContentComponent },
];
