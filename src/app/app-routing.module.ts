import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevilFruitComponent } from './devil-fruit/devil-fruit.component';
import { OnePieceCharacterComponent } from './character/one-piece-character/one-piece-character.component';
import { DevilFruitLogiaComponent } from './devil-fruit/devil-fruit-logia/devil-fruit-logia.component';
import { DevilFruitParameciaComponent } from './devil-fruit/devil-fruit-paramecia/devil-fruit-paramecia.component';
import { DevilFruitZoanComponent } from './devil-fruit/devil-fruit-zoan/devil-fruit-zoan.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'character/one-piece-character' },
  { path: 'character/one-piece-character', component: OnePieceCharacterComponent },
  { path: 'devil-fruit', component: DevilFruitComponent },
  { path: 'devil-fruit-logia', component: DevilFruitLogiaComponent },
  { path: 'devil-fruit-paramecia', component: DevilFruitParameciaComponent },
  { path: 'devil-fruit-zoan', component: DevilFruitZoanComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
