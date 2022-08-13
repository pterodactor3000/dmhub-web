import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'wbhb-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
  inputLabel = 'Provide game id...';
  inputValue = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.router.navigate([`${this.inputValue}`], { relativeTo: this.route });
    }
  }
}
