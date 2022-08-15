import { SheetModule } from './../character/sheet/sheet.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '../../base/button/button.module';
import { InputModule } from '../../base/input/input.module';
import { CharacterModule } from '../character/character.module';
import { DetailsRoutingModule } from './details-routing.module';

@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    CharacterModule,
    SheetModule,
    InputModule,
    ButtonModule,
    FormsModule,
    DetailsRoutingModule,
  ],
  exports: [DetailsComponent],
})
export class DetailsModule {}
