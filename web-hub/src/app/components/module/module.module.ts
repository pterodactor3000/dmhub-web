import { NgModule } from '@angular/core';
import { WbHbModule } from 'src/app/wb-hb.module';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '../base/button/button.module';
import { InputModule } from '../base/input/input.module';
import { ModuleComponent } from './module.component';
import { ModuleRoutingModule } from './module-routing.module';
import { SearchModule } from '../base/search/search.module';

@NgModule({
  declarations: [ModuleComponent],
  imports: [
    WbHbModule,
    InputModule,
    ButtonModule,
    FormsModule,
    SearchModule,
    ModuleRoutingModule,
  ],
  exports: [ModuleComponent],
})
export class ModuleModule {}
