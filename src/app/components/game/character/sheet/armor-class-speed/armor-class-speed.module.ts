import { SpeedModule } from './speed/speed.module';
import { ArmorClassModule } from './armor-class/armor-class.module';
import { NgModule } from '@angular/core';
import { ArmorClassSpeedComponent } from './armor-class-speed.component';
import { WbHbModule } from 'src/app/wb-hb.module';

@NgModule({
  declarations: [ArmorClassSpeedComponent],
  exports: [ArmorClassSpeedComponent],
  imports: [WbHbModule, ArmorClassModule, SpeedModule],
})
export class ArmorClassSpeedModule {}
