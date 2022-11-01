import { NgModule } from '@angular/core';
import { WbHbModule } from 'src/app/wb-hb.module';
import { ItemComponent } from './item.component';

@NgModule({
  declarations: [ItemComponent],
  exports: [ItemComponent],
  imports: [WbHbModule],
})
export class ItemModule {}
