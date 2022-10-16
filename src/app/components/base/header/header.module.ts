import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { WbHbModule } from 'src/app/wb-hb.module';
import { HomeButtonModule } from './home-button/home-button.module';
import { ButtonModule } from '../button/button.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [WbHbModule, HomeButtonModule, ButtonModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
