import { BaseComponent } from './../base/base.component';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'wbhb-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent extends BaseComponent {
  inputLabel = 'Provide game id...';
  inputValue = '';

  constructor(private router: Router, private route: ActivatedRoute) {
    super();
  }

  onSubmit(): void {
    this.router.navigate([`${this.inputValue}`], { relativeTo: this.route });
  }
}
