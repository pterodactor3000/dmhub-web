import { NgModule } from '@angular/core';
import { WbHbModule } from 'src/app/wb-hb.module';
import { ArmorClassComponent } from './armor-class.component';

@NgModule({
  declarations: [ArmorClassComponent],
  exports: [ArmorClassComponent],
  imports: [WbHbModule],
})
export class ArmorClassModule {}
