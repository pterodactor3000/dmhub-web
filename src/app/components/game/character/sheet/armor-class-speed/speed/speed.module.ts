import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeedComponent } from './speed.component';

@NgModule({
  declarations: [SpeedComponent],
  exports: [SpeedComponent],
  imports: [CommonModule],
})
export class SpeedModule {}
