import { WbHbModule } from 'src/app/wb-hb.module';
import { ResourceModule } from './resource/resource.module';
import { NgModule } from '@angular/core';
import { ResourcesComponent } from './resources.component';

@NgModule({
  declarations: [ResourcesComponent],
  exports: [ResourcesComponent],
  imports: [WbHbModule, ResourceModule],
})
export class ResourcesModule {}
