import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'wbhb-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss'],
})
export class ModuleComponent {
  inputLabel = 'Provide module id...';
  inputValue = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.router.navigate([`${this.inputValue}`], { relativeTo: this.route });
    }
  }
}
