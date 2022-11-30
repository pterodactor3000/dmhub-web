import { Component, Input } from '@angular/core';
import { OngoingEffectsData, SheetDataType } from '@definitions/types';

@Component({
  selector: 'wbhb-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.scss'],
})
export class ConditionsComponent {
  private _ongoingEffectsData!: SheetDataType;

  @Input() set ongoingEffectsData(value: SheetDataType) {
    this._ongoingEffectsData = value as OngoingEffectsData[];
  }

  get ongoingEffectsData(): OngoingEffectsData[] {
    return this._ongoingEffectsData as OngoingEffectsData[];
  }
}
