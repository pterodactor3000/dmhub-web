import { FeaturesComponent } from './features.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FeaturesComponent],
  exports: [FeaturesComponent],
  imports: [CommonModule],
})
export class FeaturesModule {}
