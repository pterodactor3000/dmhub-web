import { Component, Input } from '@angular/core';

@Component({
  selector: 'wbhb-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.scss'],
})
export class AttributeComponent {
  private _value!: number;
  private _modifier!: number;

  @Input() key!: string | number;
  @Input() set value(value: string | number) {
    this._value = value as number;
    this._modifier = Math.floor((this._value - 10) / 2);
  }

  get value(): number {
    return this._value;
  }

  get modifier(): number {
    return this._modifier;
  }
}
