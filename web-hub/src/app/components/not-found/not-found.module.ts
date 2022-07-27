import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found.component';
import { RouterModule } from '@angular/router';
import { BaseModule } from '../base/base.module';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    BaseModule,
    RouterModule.forChild([{ path: '', component: NotFoundComponent }]),
  ],
})
export class NotFoundModule {}
