import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  canActivate,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/compat/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo('login');
const redirectAuthorizedToHome = () => redirectLoggedInTo('home');

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./components/home/home.module').then((m) => m.HomeModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./components/login/login.module').then((m) => m.LoginModule),
    ...canActivate(redirectAuthorizedToHome),
  },
  {
    path: 'game',
    loadChildren: () =>
      import('./components/game/game.module').then((m) => m.GameModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'module',
    loadChildren: () =>
      import('./components/module/module.module').then((m) => m.ModuleModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
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
