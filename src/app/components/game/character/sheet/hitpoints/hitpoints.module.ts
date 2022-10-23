import { NgModule } from '@angular/core';
import { WbHbModule } from 'src/app/wb-hb.module';
import { HitpointsComponent } from './hitpoints.component';

@NgModule({
  declarations: [HitpointsComponent],
  exports: [HitpointsComponent],
  imports: [WbHbModule],
})
export class HitpointsModule {}
