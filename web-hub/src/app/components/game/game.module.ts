import { CharacterModule } from './character/character.module';
import { NgModule } from '@angular/core';
import { GameComponent } from './game.component';
import { WbHbModule } from 'src/app/wb-hb.module';

@NgModule({
  declarations: [GameComponent],
  imports: [WbHbModule, CharacterModule],
  exports: [GameComponent],
})
export class GameModule {}
