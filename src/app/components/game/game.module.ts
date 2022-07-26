import { SearchModule } from './../base/search/search.module';
import { NgModule } from '@angular/core';
import { GameComponent } from './game.component';
import { WbHbModule } from 'src/app/wb-hb.module';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '../base/button/button.module';
import { InputModule } from '../base/input/input.module';
import { GameRoutingModule } from './game-routing.module';

@NgModule({
  declarations: [GameComponent],
  imports: [
    WbHbModule,
    GameRoutingModule,
    InputModule,
    ButtonModule,
    FormsModule,
    SearchModule,
  ],
  exports: [GameComponent],
})
export class GameModule {}
