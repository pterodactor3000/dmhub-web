import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortraitComponent } from './portrait.component';

@NgModule({
  declarations: [PortraitComponent],
  exports: [PortraitComponent],
  imports: [CommonModule],
})
export class PortraitModule {}
