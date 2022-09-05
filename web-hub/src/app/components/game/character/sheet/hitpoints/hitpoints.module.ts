import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HitpointsComponent } from './hitpoints.component';

@NgModule({
  declarations: [HitpointsComponent],
  exports: [HitpointsComponent],
  imports: [CommonModule],
})
export class HitpointsModule {}
