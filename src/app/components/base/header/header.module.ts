import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { WbHbModule } from 'src/app/wb-hb.module';
import { ButtonModule } from '../button/button.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent],
  imports: [WbHbModule, ButtonModule, RouterModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
