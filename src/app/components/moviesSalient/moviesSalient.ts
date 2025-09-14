import { Component, computed, Input, signal } from '@angular/core';
import { MovieType, SalientParamasType } from '../../../lib/types';
import { moviesSalientCoomingSoon, moviesSalientNew, moviesSalientWeek } from '../../../lib/movies';
import { MovieCardComponent } from '../movieCard/movieCard';

@Component({
  selector: 'app_movies-salient',
  templateUrl: './moviesSalient.html',
  imports: [MovieCardComponent],
})
export class MoviesSalientComponent {
  @Input() set salientParamas(value: SalientParamasType) {
    this.salientParamsSignal.set(value);
  }

  private salientParamsSignal = signal<SalientParamasType>('');

  moviesSalient = computed((): MovieType[] => {
    const params = this.salientParamsSignal();

    switch (params) {
      case 'nuevos':
        return moviesSalientNew;
      case 'semana':
        return moviesSalientWeek;
      case 'proximamente':
        return moviesSalientCoomingSoon;
      default:
        return moviesSalientNew;
    }
  });
}
