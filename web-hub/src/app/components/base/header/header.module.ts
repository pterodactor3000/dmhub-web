import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { WbHbModule } from 'src/app/wb-hb.module';
import { HomeButtonModule } from './home-button/home-button.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [WbHbModule, HomeButtonModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
