import { Component, OnInit } from '@angular/core';
import { MarvelServiceService } from 'src/app/services/marvel-service.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  users: any;

  constructor(private api: MarvelServiceService) {}

  ngOnInit() {
    this.api.get('users?page=1').subscribe((res) => {
      this.users = res;
      console.log('data response', this.users);
    });
  }
}
