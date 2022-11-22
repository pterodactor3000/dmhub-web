import { map, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {
  SheetData,
  CharacterResponse,
  Appearance,
  Class,
  TokenData,
  OngoingEffectsData,
} from '@definitions/types';
import { Store } from '@ngrx/store';
import { selectSheet } from './store/selectors/sheet.selectors';
import { sheetActions } from './store/actions/sheet.actions';
import { Dictionary } from '@ngrx/entity';

@Component({
  selector: 'wbhb-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.scss'],
})
export class SheetComponent implements OnInit {
  private _characterId!: string;

  sheetData!: SheetData;
  character!: CharacterResponse;

  data: Observable<SheetData | null> = this.store.select(selectSheet).pipe(
    map((character: Dictionary<CharacterResponse>) => {
      if (character[this._characterId]) {
        this.character = character[this._characterId] as CharacterResponse;

        return this.prepareTokenData();
      }
      return null;
    })
  );

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {
    this.sheetData = {};

    this.route.params.subscribe((params: Params) => {
      this._characterId = params['characterid'];

      this.store.dispatch(
        sheetActions.loadSheet({
          params: {
            gameid: params['gameid'],
            pretty: true,
            type: 'character',
            id: this._characterId,
          },
        })
      );
    });
  }

  private prepareTokenData(): SheetData {
    this.sheetData['tokenData'] = {
      appearance: this.character.appearance as Appearance,
      characterName: this.character.characterName as string,
      classes: this.character.classes as Class[],
      raceid: this.character.raceid as string,
    } as TokenData;

    return this.sheetData;
  }
}
