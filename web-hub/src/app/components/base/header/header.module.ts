import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { WbHbModule } from 'src/app/wb-hb.module';
import { IconModule } from '../icon/icon.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [WbHbModule, IconModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
