import { Component, Input } from '@angular/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';

@Component({
  selector: 'wbhb-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() appearance: MatFormFieldAppearance = 'fill';
  @Input() label!: string;
  @Input() value!: string;
}
