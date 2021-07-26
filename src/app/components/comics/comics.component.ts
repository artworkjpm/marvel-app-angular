import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getComics } from 'src/app/Store/Actions/comics.action';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss'],
})
export class ComicsComponent implements OnInit {
  comics$ = this.store.select((state) => state.comicReducer.comics);

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.getAllComics();
  }

  loadMoreComics() {
    console.log('test');
  }

  getAllComics() {
    this.store.dispatch(getComics());
  }
}
