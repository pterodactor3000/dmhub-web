import { DetailsComponent } from './details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'game/:gameid', component: DetailsComponent },
  {
    path: 'game/:gameid/character',
    loadChildren: () =>
      import('../character/sheet/sheet.module').then((m) => m.SheetModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsRoutingModule {}
