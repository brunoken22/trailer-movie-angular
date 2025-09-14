import { Routes } from '@angular/router';
import { MovieComponent } from './pages/movies/movie';
import { ContactComponent } from './pages/contact/contact';
import { HomeComponent } from './pages/home/home';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'peliculas',
    component: MovieComponent,
  },
  {
    path: 'contacto',
    component: ContactComponent,
  },
];
