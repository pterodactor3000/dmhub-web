import { BaseComponent } from './base.component';
import { NgModule } from '@angular/core';
import { WbHbModule } from 'src/app/wb-hb.module';

@NgModule({
  declarations: [BaseComponent],
  imports: [WbHbModule],
})
export class BaseModule {}
