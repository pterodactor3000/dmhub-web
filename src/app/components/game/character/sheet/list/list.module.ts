import { ItemModule } from './item/item.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';

@NgModule({
  declarations: [ListComponent],
  exports: [ListComponent],
  imports: [CommonModule, ItemModule],
})
export class ListModule {}
