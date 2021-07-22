import { createAction, props } from '@ngrx/store';

export const getComics = createAction('[Comics] Get comics');
export const getComicsSuccess = createAction(
  '[Comics] Success Get Comics',
  (comics: any) => comics
);
