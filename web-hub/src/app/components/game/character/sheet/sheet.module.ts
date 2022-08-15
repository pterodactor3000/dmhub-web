import { WbHbModule } from 'src/app/wb-hb.module';
import { NgModule } from '@angular/core';
import { SheetComponent } from './sheet.component';
import { SheetRoutingModule } from './sheet-routing.module';

@NgModule({
  declarations: [SheetComponent],
  imports: [WbHbModule, SheetRoutingModule],
  exports: [SheetComponent],
})
export class SheetModule {}
