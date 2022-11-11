import { NgModule } from '@angular/core';
import { ProficienciesComponent } from './proficiencies.component';
import { WbHbModule } from 'src/app/wb-hb.module';
import { ListModule } from '../list/list.module';

@NgModule({
  declarations: [ProficienciesComponent],
  exports: [ProficienciesComponent],
  imports: [WbHbModule, ListModule],
})
export class ProficienciesModule {}
