import { Component, OnInit } from '@angular/core';
import { createSelector, select, Store } from '@ngrx/store';
import { getComics, increment } from 'src/app/Store/Actions/comics.action';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss'],
})
export class ComicsComponent implements OnInit {
  comics$ = this.store.select((state) => state.comicReducer.comics);
  skip = 0;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.getAllComics();
  }

  loadMoreComics() {
    this.skip = this.skip + 20;
    this.store.dispatch(increment({ skip: this.skip }));
    this.getAllComics();
  }

  getAllComics() {
    this.store.dispatch(getComics({ skip: this.skip }));
  }
}
