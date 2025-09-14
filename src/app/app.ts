import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  navigation = [
    {
      id: 1,
      title: 'Inicio',
      url: '/',
    },
    {
      id: 2,
      title: 'Peliculas',
      url: '/peliculas',
    },
    {
      id: 3,
      title: 'Contactar',
      url: '/contacto',
    },
  ];
  protected readonly title = signal('movies_angular');
}
