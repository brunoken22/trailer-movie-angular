import { Component, Input, signal } from '@angular/core';
import { MovieType } from '../../../lib/types';

@Component({
  selector: 'app_movieCard',
  templateUrl: './movieCard.html',
})
export class MovieCardComponent {
  @Input() movie: MovieType = {
    id: 0,
    title: '',
    anio: 0,
    genero: '',
    rating: 0,
    duracion: '',
    youtube_id: '',
    trailer_url: '',
    miniatura: '',
    descripcion: '',
    categoria: '',
  };
}
