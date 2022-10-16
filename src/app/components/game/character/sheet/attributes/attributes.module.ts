import { AttributeModule } from './attribute/attribute.module';
import { WbHbModule } from 'src/app/wb-hb.module';
import { NgModule } from '@angular/core';
import { AttributesComponent } from './attributes.component';

@NgModule({
  declarations: [AttributesComponent],
  exports: [AttributesComponent],
  imports: [WbHbModule, AttributeModule],
})
export class AttributesModule {}
