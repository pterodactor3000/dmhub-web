import { WbHbModule } from './../../../../wb-hb.module';
import { NgModule } from '@angular/core';
import { HomeButtonComponent } from './home-button.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeButtonComponent],
  imports: [WbHbModule, RouterModule],
  exports: [HomeButtonComponent],
})
export class HomeButtonModule {}
