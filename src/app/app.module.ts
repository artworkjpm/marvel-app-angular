import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { TopHeaderComponent } from './components/top-header/top-header.component';
import { CharactersComponent } from './components/characters/characters.component';
import { MarvelServiceService } from './services/marvel-service.service';

@NgModule({
  declarations: [AppComponent, TopHeaderComponent, CharactersComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [HttpClient, MarvelServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
