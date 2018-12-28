import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';
import { OnePieceCharacterComponent } from './character/one-piece-character/one-piece-character.component';
import { DevilFruitComponent } from './devil-fruit/devil-fruit.component';
import { DevilFruitLogiaComponent } from './devil-fruit/devil-fruit-logia/devil-fruit-logia.component';
import { DevilFruitParameciaComponent } from './devil-fruit/devil-fruit-paramecia/devil-fruit-paramecia.component';
import { DevilFruitZoanComponent } from './devil-fruit/devil-fruit-zoan/devil-fruit-zoan.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    OnePieceCharacterComponent,
    DevilFruitComponent,
    DevilFruitLogiaComponent,
    DevilFruitParameciaComponent,
    DevilFruitZoanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-one-piece'),
    AngularFirestoreModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
