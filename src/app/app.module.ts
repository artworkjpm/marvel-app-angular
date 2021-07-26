import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { TopHeaderComponent } from './components/top-header/top-header.component';
import { CharactersComponent } from './components/characters/characters.component';
import { MarvelServiceService } from './services/marvel-service.service';
import { StoreModule } from '@ngrx/store';
import { comicReducer } from './Store/Reducers/comics.reducers';
import { ComicsComponent } from './components/comics/comics.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { ComicEffects } from './Store/Effects/comics.effects';

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    CharactersComponent,
    ComicsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ comicReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([ComicEffects]),
  ],
  providers: [HttpClient, MarvelServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
