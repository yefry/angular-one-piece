import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';
import { OnePieceCharacterComponent } from './character/one-piece-character/one-piece-character.component';
import { DemonFruitComponent } from './demon-fruit/demon-fruit/demon-fruit.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    OnePieceCharacterComponent,
    DemonFruitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
