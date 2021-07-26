import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const KEY = 'b4ae5f9b470feb926a9ac769fa9de7fa';
const Private = '19979debb41903c961cf2ed6340adecb7b710f8e';

@Injectable({
  providedIn: 'root',
})
export class MarvelServiceService {
  constructor(private http: HttpClient) {}

  public getComics(skip: number): Observable<any> {
    return this.http.get(`/comics?apikey=${KEY}&offset=${skip}`);
  }
}

//&limit=100&offset=100

//data.results[13].images[0].path
//http://i.annihil.us/u/prod/marvel/i/mg/c/60/4bc69f11baf75.jpg
//http://i.annihil.us/u/prod/marvel/i/mg/f/c0/4bc66d78f1bee.jpg
