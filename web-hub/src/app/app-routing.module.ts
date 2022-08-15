import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'game',
    loadChildren: () =>
      import('./components/game/game.module').then((m) => m.GameModule),
  },
  {
    path: 'game/:gameid',
    loadChildren: () =>
      import('./components/game/details/details.module').then(
        (m) => m.DetailsModule
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./components/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
