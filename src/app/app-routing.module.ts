import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnePieceCharacterComponent } from './character/one-piece-character/one-piece-character.component';
import { DemonFruitComponent } from './demon-fruit/demon-fruit/demon-fruit.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'character/one-piece-character' },
  { path: 'character/one-piece-character', component: OnePieceCharacterComponent },
  { path: 'demon-fruit/demon-fruit', component: DemonFruitComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
