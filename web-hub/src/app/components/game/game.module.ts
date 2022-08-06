import { DetailsModule } from './details/details.module';
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
    DetailsModule,
    InputModule,
    ButtonModule,
    FormsModule,
    GameRoutingModule,
  ],
  exports: [GameComponent],
})
export class GameModule {}
