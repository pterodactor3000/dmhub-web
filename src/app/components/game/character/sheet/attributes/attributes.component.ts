import { Component, Input } from '@angular/core';
import { AttributeData, SheetDataType } from '@definitions/types';

@Component({
  selector: 'wbhb-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss'],
})
export class AttributesComponent {
  private _attributesData!: AttributeData[];

  @Input() set attributesData(value: SheetDataType) {
    this._attributesData = value as AttributeData[];
  }

  get attributesData(): AttributeData[] {
    return this._attributesData;
  }
}
