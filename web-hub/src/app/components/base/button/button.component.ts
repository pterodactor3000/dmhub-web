import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonAttributes } from 'src/app/services/types';

@Component({
  selector: 'wbhb-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() attributes!: ButtonAttributes;

  @Output() click: EventEmitter<void> = new EventEmitter<void>();
}
