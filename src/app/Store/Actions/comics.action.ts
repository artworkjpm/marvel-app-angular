import { createAction, props } from '@ngrx/store';

export const getComics = createAction('[Comics] Get comics');
export const getComicsSuccess = createAction(
  '[Comics] Success Get Comics',
  props<{ comics: any[] }>()
);
export const getComicsError = createAction(
  '[Comics API] Comics Loaded Error',
  props<{ error: '' }>()
);
