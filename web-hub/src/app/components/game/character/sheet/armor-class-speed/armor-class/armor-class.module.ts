import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArmorClassComponent } from './armor-class.component';

@NgModule({
  declarations: [ArmorClassComponent],
  exports: [ArmorClassComponent],
  imports: [CommonModule],
})
export class ArmorClassModule {}
