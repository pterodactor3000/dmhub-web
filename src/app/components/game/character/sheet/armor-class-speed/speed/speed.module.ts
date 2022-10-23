import { NgModule } from '@angular/core';
import { WbHbModule } from 'src/app/wb-hb.module';
import { SpeedComponent } from './speed.component';

@NgModule({
  declarations: [SpeedComponent],
  exports: [SpeedComponent],
  imports: [WbHbModule],
})
export class SpeedModule {}
