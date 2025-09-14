import { Component, signal } from '@angular/core';
import { movies } from '../../../lib/movies';
import { MovieCardComponent } from '../../components/movieCard/movieCard';
import { MovieType } from '../../../lib/types';

@Component({
  selector: 'app-movie',
  imports: [MovieCardComponent],
  templateUrl: './movie.html',
  styleUrl: './movie.css',
})
export class MovieComponent {
  movies = signal<MovieType[]>(movies);

  handleSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    const query = input.value;
    console.log('Buscar pelicula:', query);
    if (!query) {
      this.movies.set(movies);
    } else {
      const filteredMovies = movies.filter((movie) => {
        return movie.title.toLowerCase().includes(query.toLowerCase());
      });
      this.movies.set(filteredMovies);
    }
  }
}
