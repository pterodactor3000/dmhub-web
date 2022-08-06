import { BaseComponent } from './../../base/base.component';
import { switchMap, takeUntil } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { GameResponse, Character } from 'src/app/services/types';

@Component({
  selector: 'wbhb-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent extends BaseComponent implements OnInit {
  set game(value: GameResponse) {
    this._game = value as GameResponse;
    this.characters = (value as GameResponse).characters as Character[];
  }

  get game() {
    return this._game;
  }

  private _game!: GameResponse;

  characters!: Character[];
  constructor(private route: ActivatedRoute, private service: HttpService) {
    super();
  }

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params: Params) =>
          this.service.get({
            gameid: params['gameid'],
            pretty: true,
            type: '',
            id: '',
          })
        )
      )
      .pipe(takeUntil(this.unsubscribeSubject))
      .subscribe((game) => (this.game = game as GameResponse));
  }
}
