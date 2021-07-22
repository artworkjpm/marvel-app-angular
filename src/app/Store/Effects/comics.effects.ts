import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs/operators';
import { MarvelServiceService } from 'src/app/services/marvel-service.service';
import { getComics, getComicsSuccess } from '../Actions/comics.action';

@Injectable()
export class ComicEffects {
  loadComics$ = createEffect(() =>
    this.action$.pipe(
      ofType(getComics),
      exhaustMap(() =>
        this.dataService.getComics().pipe(
          map((comics) => {
            console.log(comics.data.results);
            return getComicsSuccess(comics.data.results);
          })
          /* catchError(() => EmptyError) */
        )
      )
    )
  );

  constructor(
    private action$: Actions,
    private dataService: MarvelServiceService
  ) {}
}
