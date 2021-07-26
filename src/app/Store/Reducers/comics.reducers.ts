import { createReducer, on } from '@ngrx/store';
import {
  getComicsError,
  getComicsSuccess,
  increment,
} from '../Actions/comics.action';

export interface Coms {
  comics: any[];
  skip: number;
  error: any;
}

const initialState: Coms = {
  comics: [],
  skip: 0,
  error: '',
};

export const comicReducer = createReducer(
  initialState,
  on(getComicsSuccess, (state, { comics }) => ({
    ...state,
    comics: [...state.comics, ...comics],
  })),
  on(getComicsError, (state, { error }) => ({
    ...state,
    error,
  })),
  on(increment, (state, { skip }) => ({ ...state, skip }))
);
