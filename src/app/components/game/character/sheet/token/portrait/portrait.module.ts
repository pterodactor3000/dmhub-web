import { NgModule } from '@angular/core';
import { WbHbModule } from 'src/app/wb-hb.module';
import { PortraitComponent } from './portrait.component';

@NgModule({
  declarations: [PortraitComponent],
  exports: [PortraitComponent],
  imports: [WbHbModule],
})
export class PortraitModule {}
