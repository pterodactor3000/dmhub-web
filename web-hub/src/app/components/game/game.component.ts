import { GameResponse } from './../../services/types.d';
import { Component, Input } from '@angular/core';
import { Character } from 'src/app/services/types';

@Component({
  selector: 'wbhb-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
  @Input() set game(value: GameResponse) {
    this._game = value as GameResponse;
    this.characters = (value as GameResponse).characters as Character[];
  }

  get game() {
    return this._game;
  }

  private _game!: GameResponse;
  characters!: Character[];
}
