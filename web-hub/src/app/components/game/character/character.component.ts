import { Component, Input } from '@angular/core';
import { Character } from 'src/app/services/types';

@Component({
  selector: 'wbhb-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent {
  @Input() character!: Character;
}
