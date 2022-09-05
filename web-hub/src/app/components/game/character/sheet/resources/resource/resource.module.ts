import { NgModule } from '@angular/core';
import { WbHbModule } from 'src/app/wb-hb.module';
import { ResourceComponent } from './resource.component';

@NgModule({
  declarations: [ResourceComponent],
  exports: [ResourceComponent],
  imports: [WbHbModule],
})
export class ResourceModule {}
