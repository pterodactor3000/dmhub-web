import { NgModule } from '@angular/core';
import { DetailsComponent } from './details.component';
import { FormsModule } from '@angular/forms';
import { CharacterModule } from '../character/character.module';
import { DetailsRoutingModule } from './details-routing.module';
import { WbHbModule } from 'src/app/wb-hb.module';
import { ButtonModule } from '@base/button/button.module';
import { InputModule } from '@base/input/input.module';

@NgModule({
  declarations: [DetailsComponent],
  imports: [
    WbHbModule,
    DetailsRoutingModule,
    CharacterModule,
    InputModule,
    ButtonModule,
    FormsModule,
  ],
  exports: [DetailsComponent],
})
export class DetailsModule {}
