import { IconTypeKeys } from './icon.k';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'wbhb-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  @Input() icon!: IconTypeKeys;
}
