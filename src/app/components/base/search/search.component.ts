import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'wbhb-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Input() inputLabel = 'Provide module id...';
  @Input() inputValue = '';
  @Input() buttonLabel = 'Search';
  @Input() relativeRoute!: ActivatedRoute;

  constructor(private router: Router) {}

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.router.navigate([`${this.inputValue}`], {
        relativeTo: this.relativeRoute,
      });
    }
  }
}
