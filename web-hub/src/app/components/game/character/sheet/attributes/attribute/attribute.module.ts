import { WbHbModule } from 'src/app/wb-hb.module';
import { NgModule } from '@angular/core';
import { AttributeComponent } from './attribute.component';

@NgModule({
  declarations: [AttributeComponent],
  exports: [AttributeComponent],
  imports: [WbHbModule],
})
export class AttributeModule {}
