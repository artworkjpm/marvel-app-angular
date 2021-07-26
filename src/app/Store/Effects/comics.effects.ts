import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { MarvelServiceService } from 'src/app/services/marvel-service.service';
import {
  getComics,
  getComicsError,
  getComicsSuccess,
} from '../Actions/comics.action';

@Injectable()
export class ComicEffects {
  loadComics$ = createEffect(() =>
    this.action$.pipe(
      ofType(getComics),
      mergeMap((action) =>
        this.dataService.getComics(action.skip).pipe(
          map((comics) => {
            console.log(comics.data);
            return getComicsSuccess({ comics: comics.data.results });
          }),
          catchError((error) => of(getComicsError({ error })))
        )
      )
    )
  );

  constructor(
    private action$: Actions,
    private dataService: MarvelServiceService
  ) {}
}
