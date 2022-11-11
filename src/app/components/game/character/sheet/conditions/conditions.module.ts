import { NgModule } from '@angular/core';
import { WbHbModule } from 'src/app/wb-hb.module';
import { ConditionsComponent } from './conditions.component';

@NgModule({
  declarations: [ConditionsComponent],
  imports: [WbHbModule],
  exports: [ConditionsComponent],
})
export class ConditionsModule {}
