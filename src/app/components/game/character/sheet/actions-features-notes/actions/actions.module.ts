import { ActionsComponent } from './actions.component';
import { NgModule } from '@angular/core';
import { WbHbModule } from 'src/app/wb-hb.module';

@NgModule({
  declarations: [ActionsComponent],
  exports: [ActionsComponent],
  imports: [WbHbModule],
})
export class ActionsModule {}
