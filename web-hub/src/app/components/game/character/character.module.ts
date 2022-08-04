import { NgModule } from '@angular/core';
import { CharacterComponent } from './character.component';
import { WbHbModule } from 'src/app/wb-hb.module';

@NgModule({
  declarations: [CharacterComponent],
  imports: [WbHbModule],
  exports: [CharacterComponent],
})
export class CharacterModule {}
