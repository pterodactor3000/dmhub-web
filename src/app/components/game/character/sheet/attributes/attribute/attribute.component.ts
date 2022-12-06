import { Component, Input } from '@angular/core';

@Component({
  selector: 'wbhb-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.scss'],
})
export class AttributeComponent {
  @Input() key!: string;
  @Input() value!: string;
}
