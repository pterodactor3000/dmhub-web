import { Appearance, CharacterResponse, Class, SheetData } from '@data/types';
import { switchMap, takeUntil } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BaseComponent } from '@base/base.component';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'wbhb-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.scss'],
})
export class SheetComponent extends BaseComponent implements OnInit {
  sheetData: SheetData = {};
  character!: CharacterResponse;

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
            type: 'character',
            id: params['characterid'],
          })
        )
      )
      .pipe(takeUntil(this.unsubscribeSubject))
      .subscribe((character) => {
        this.character = character as CharacterResponse;
        this.prepareTokenData();
      });
  }

  private prepareTokenData(): void {
    this.sheetData['tokenData'] = {
      appearance: this.character.appearance as Appearance,
      characterName: this.character.characterName as string,
      classes: this.character.classes as Class[],
      raceid: this.character.raceid as string,
    };
  }
}
