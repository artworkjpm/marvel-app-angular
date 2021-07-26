import { createReducer, on } from '@ngrx/store';
import { getComicsError, getComicsSuccess } from '../Actions/comics.action';

const initialState: Object = {
  comics: [],
  error: '',
};

export const comicReducer = createReducer(
  initialState,
  on(getComicsSuccess, (state, { comics }) => ({
    ...state,
    comics,
  })),
  on(getComicsError, (state, { error }) => ({
    ...state,
    error,
  }))
);
