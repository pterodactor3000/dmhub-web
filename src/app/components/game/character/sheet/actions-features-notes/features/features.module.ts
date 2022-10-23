import { FeaturesComponent } from './features.component';
import { NgModule } from '@angular/core';
import { WbHbModule } from 'src/app/wb-hb.module';

@NgModule({
  declarations: [FeaturesComponent],
  exports: [FeaturesComponent],
  imports: [WbHbModule],
})
export class FeaturesModule {}
