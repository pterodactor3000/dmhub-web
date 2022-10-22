import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/types/types';

@Component({
  selector: 'wbhb-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent {
  @Input() character!: Character;

  constructor(private router: Router, private route: ActivatedRoute) {}

  onClick(): void {
    this.router.navigate([`character/${this.character.id}`], {
      relativeTo: this.route,
    });
  }
}
