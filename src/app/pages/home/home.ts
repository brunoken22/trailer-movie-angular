import { Component, Input, signal } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { MoviesSalientComponent } from '../../components/moviesSalient/moviesSalient';
import { SalientParamasType } from '../../../lib/types';
import { ButttonComponent } from '../../components/ui/button/button';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroMapPin, heroUsers } from '@ng-icons/heroicons/outline';

@Component({
  templateUrl: './home.html',
  imports: [ButttonComponent, RouterLinkActive, RouterLink, MoviesSalientComponent, NgIcon],
  viewProviders: [provideIcons({ heroMapPin })],
})
export class HomeComponent {
  @Input() button = '';
  title = 'Ver trailer';
  cinemas = [
    {
      id: 1,
      titulo: 'Cine Monumental',
      ubicacion: 'Av. Corrientes 1660, Buenos Aires',
      url: 'https://www.google.com/maps/place/Cine+Monumental/@-34.603722,-58.381592,17z',
    },
    {
      id: 2,
      titulo: 'Cine Gaumont',
      ubicacion: 'Av. Rivadavia 1635, Buenos Aires',
      url: 'https://www.google.com/maps/place/Cine+Gaumont/@-34.608899,-58.391045,17z',
    },
    {
      id: 3,
      titulo: 'Cine Hoyts Abasto',
      ubicacion: 'Av. Corrientes 3247, Buenos Aires',
      url: 'https://www.google.com/maps/place/Cine+Hoyts+Abasto/@-34.603333,-58.410833,17z',
    },
    {
      id: 4,
      titulo: 'Cine Atlas Santa Fe',
      ubicacion: 'Av. Santa Fe 2020, Buenos Aires',
      url: 'https://www.google.com/maps/place/Cine+Atlas+Santa+Fe/@-34.595833,-58.3925,17z',
    },
    {
      id: 5,
      titulo: 'Cine Recoleta',
      ubicacion: 'Junín 1930, Buenos Aires',
      url: 'https://www.google.com/maps/place/Cine+Recoleta/@-34.5875,-58.392222,17z',
    },
  ];
  @Input() salientParamas = signal<SalientParamasType>('');

  constructor(private route: ActivatedRoute) {}

  navigationSalient = signal([
    {
      id: 1,
      title: 'Nuevos',
      salient: 'nuevos',
    },
    {
      id: 2,
      title: 'Esta semana',
      salient: 'semana',
    },
    {
      id: 3,
      title: 'Proximamente',
      salient: 'proximamente',
    },
  ]);

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.salientParamas.set(params['salient'] || '');
    });
  }
}
