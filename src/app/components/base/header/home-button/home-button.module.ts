import { NgModule } from '@angular/core';
import { HomeButtonComponent } from './home-button.component';
import { RouterModule } from '@angular/router';
import { WbHbModule } from 'src/app/wb-hb.module';

@NgModule({
  declarations: [HomeButtonComponent],
  imports: [WbHbModule, RouterModule],
  exports: [HomeButtonComponent],
})
export class HomeButtonModule {}
