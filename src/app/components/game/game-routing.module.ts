import { GameComponent } from './game.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: GameComponent,
  },
  {
    path: ':gameid',
    loadChildren: () =>
      import('./details/details.module').then((m) => m.DetailsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameRoutingModule {}
