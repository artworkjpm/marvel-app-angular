import { createAction, props } from '@ngrx/store';
import { Observable } from 'rxjs';

export const getComics = createAction(
  '[Comics] Get comics',
  props<{ skip: number }>()
);
export const getComicsSuccess = createAction(
  '[Comics] Success Get Comics',
  props<{ comics: any[] }>()
);
export const getComicsError = createAction(
  '[Comics API] Comics Loaded Error',
  props<{ error: '' }>()
);
export const increment = createAction(
  '[Comics API] Inc skips',
  props<{ skip: number }>()
);
