import { createReducer, on } from '@ngrx/store';
import { getComicsSuccess } from '../Actions/comics.action';

const initialState: any = [];

export const comicReducer = createReducer(
  initialState,
  on(getComicsSuccess, (state, data) => [...state, data])
);
