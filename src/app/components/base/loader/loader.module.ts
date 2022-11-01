import { NgModule } from '@angular/core';
import { WbHbModule } from 'src/app/wb-hb.module';
import { LoaderComponent } from './loader.component';

@NgModule({
  declarations: [LoaderComponent],
  imports: [WbHbModule],
  exports: [LoaderComponent],
})
export class LoaderModule {}
