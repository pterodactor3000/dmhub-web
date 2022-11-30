import { selectOngoingEffects } from './store/selectors/ongoing-effects.selectors';
import { map, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {
  SheetData,
  CharacterResponse,
  Appearance,
  Class,
  TokenData,
  OngoingEffectsResponse,
  Guid,
  OngoingEffectDisplay,
  EffectModifiers,
  OngoingEffectsData,
  OngoingEffectModifier,
} from '@definitions/types';
import { Store } from '@ngrx/store';
import { selectSheet } from './store/selectors/sheet.selectors';
import { sheetActions } from './store/actions/sheet.actions';
import { Dictionary } from '@ngrx/entity';
import { ongoingEffectsActions } from './store/actions/ongoing-effects.actions';
import { HelperService } from '@services/helper.service';

@Component({
  selector: 'wbhb-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.scss'],
})
export class SheetComponent implements OnInit {
  private _characterId!: string;

  sheetData!: SheetData;
  character!: CharacterResponse;

  characterResponseData: Observable<SheetData | null> = this.store
    .select(selectSheet)
    .pipe(
      map((character: Dictionary<CharacterResponse>) => {
        if (character[this._characterId]) {
          this.character = character[this._characterId] as CharacterResponse;

          this.sheetData['tokenData'] = {
            appearance: this.character.appearance as Appearance,
            characterName: this.character.characterName as string,
            classes: this.character.classes as Class[],
            raceid: this.character.raceid as string,
          } as TokenData;

          return this.sheetData;
        }
        return null;
      })
    );

  ongoingEffectsResponseData: Observable<SheetData | null> = this.store
    .select(selectOngoingEffects)
    .pipe(
      map((effects: OngoingEffectsResponse[]) => {
        this.sheetData['ongoingEffectsData'] = effects.map(
          (effect: OngoingEffectsResponse) => {
            return {
              canEndWithAction: effect.canEndWithAction as boolean,
              condition: effect.condition as Guid,
              description: effect.description as string,
              display: effect.display as OngoingEffectDisplay,
              emoji: effect.emoji as Guid,
              endActionType: effect.endActionType as string,
              guid: effect.guid as Guid,
              iconid: effect.iconid as Guid,
              id: effect.id as Guid,
              modifiers: this.helper.mapObjectToArray<
                OngoingEffectModifier,
                EffectModifiers
              >(effect.modifiers as OngoingEffectModifier),
              mtime: effect.mtime as number,
              name: effect.name as string,
              source: effect.source as string,
              stackable: effect.stackable as boolean,
              statusEffect: effect.statusEffect as string,
              transformation: effect.transformation as string,
            };
          }
        ) as OngoingEffectsData[];

        console.info(this.sheetData);
        return this.sheetData;
      })
    );

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private helper: HelperService
  ) {}

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

      this.store.dispatch(
        ongoingEffectsActions.loadOngoingEffects({
          params: {
            gameid: false,
            pretty: true,
            type: 'ongoingeffect',
            id: false,
          },
        })
      );
    });
  }
}
