import { NgModule } from '@angular/core';
import { IconComponent } from './icon.component';
import { WbHbModule } from 'src/app/wb-hb.module';

@NgModule({
  declarations: [IconComponent],
  imports: [WbHbModule],
  exports: [IconComponent],
})
export class IconModule {}
