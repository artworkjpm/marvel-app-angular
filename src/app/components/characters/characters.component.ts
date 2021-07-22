import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MarvelServiceService } from 'src/app/services/marvel-service.service';
import { getComics } from 'src/app/Store/Actions/comics.action';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  users: any;

  constructor(private api: MarvelServiceService, private store: Store) {}

  ngOnInit() {
    /* this.getAllComics(); */
  }

  /*  getAllComics() {
    this.store.dispatch(getComics());
    this.api.get().subscribe((res) => {
      this.users = res.data.results;
      console.log('data response', this.users);
    });
  } */
}
