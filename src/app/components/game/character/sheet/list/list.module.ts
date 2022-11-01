import { ItemModule } from './item/item.module';
import { NgModule } from '@angular/core';
import { ListComponent } from './list.component';
import { WbHbModule } from 'src/app/wb-hb.module';

@NgModule({
  declarations: [ListComponent],
  exports: [ListComponent],
  imports: [WbHbModule, ItemModule],
})
export class ListModule {}
