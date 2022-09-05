import { SpeedModule } from './speed/speed.module';
import { ArmorClassModule } from './armor-class/armor-class.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArmorClassSpeedComponent } from './armor-class-speed.component';

@NgModule({
  declarations: [ArmorClassSpeedComponent],
  exports: [ArmorClassSpeedComponent],
  imports: [CommonModule, ArmorClassModule, SpeedModule],
})
export class ArmorClassSpeedModule {}
