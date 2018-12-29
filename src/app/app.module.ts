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
import { OnePieceService } from './one-piece.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

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
    AngularFirestoreModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
    AngularFirestore,
    OnePieceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
