export type MovieType = {
  id: number;
  title: string;
  anio: number;
  genero: string;
  rating: number;
  duracion: string;
  youtube_id: string;
  trailer_url: string;
  miniatura: string;
  descripcion: string;
  categoria: string;
};
export type SalientParamasType = 'nuevos' | 'semana' | 'proximamente' | '';
