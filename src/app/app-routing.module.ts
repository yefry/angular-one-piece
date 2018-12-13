import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevilFruitComponent } from './devil-fruit/devil-fruit.component';
import { OnePieceCharacterComponent } from './character/one-piece-character/one-piece-character.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'character/one-piece-character' },
  { path: 'character/one-piece-character', component: OnePieceCharacterComponent },
  { path: 'devil-fruit', component: DevilFruitComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
