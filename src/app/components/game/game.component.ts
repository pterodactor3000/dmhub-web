import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'wbhb-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
  inputLabel = 'Provide game id...';
  inputValue = '';

  constructor(public route: ActivatedRoute) {}
}
