import { ErrorResponse, ResponsesTypes } from './../../../services/types.d';
import { BaseComponent } from './../../base/base.component';
import { switchMap, takeUntil } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { GameResponse, Character } from 'src/app/services/types';
import { LocalService } from '@data/local.service';

@Component({
  selector: 'wbhb-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent extends BaseComponent implements OnInit {
  set game(value: ResponsesTypes) {
    if ((value as ErrorResponse).type) {
      this.isError = true;
      this.errorMessage = (value as ErrorResponse).message;
    } else {
      this._game = value as GameResponse;
      this.characters = (value as GameResponse).characters as Character[];
    }
  }

  get game(): GameResponse {
    return this._game;
  }

  private _game!: GameResponse;

  errorMessage!: string;
  isError!: boolean;
  characters!: Character[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: HttpService,
    private localService: LocalService
  ) {
    super();
  }

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params: Params) => {
          this.localService.saveData('gameid', params['gameid']);
          return this.service.get({
            gameid: params['gameid'],
            pretty: true,
            type: '',
            id: '',
          });
        })
      )
      .pipe(takeUntil(this.unsubscribeSubject))
      .subscribe((game) => {
        this.game = game;
      });
  }

  click() {
    if (this.isError) {
      this.router.navigate(['game']);
    }
  }
}
