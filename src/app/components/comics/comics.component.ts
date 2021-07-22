import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getComics } from 'src/app/Store/Actions/comics.action';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss'],
})
export class ComicsComponent implements OnInit {
  comics$ = this.store.select((state) => state.comics);

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.getAllComics();
  }

  getAllComics() {
    this.store.dispatch(getComics());
    /*  this.dataService.getComics().subscribe((res) => {
      this.comics = res.data.results;
      console.log('data response', this.comics);
    }); */
  }
}
