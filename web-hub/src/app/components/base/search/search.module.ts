import { NgModule } from '@angular/core';
import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';
import { WbHbModule } from 'src/app/wb-hb.module';
import { ButtonModule } from '../button/button.module';
import { InputModule } from '../input/input.module';

@NgModule({
  declarations: [SearchComponent],
  imports: [WbHbModule, InputModule, ButtonModule, FormsModule],
  exports: [SearchComponent],
})
export class SearchModule {}
