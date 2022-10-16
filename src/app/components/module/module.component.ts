import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'wbhb-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss'],
})
export class ModuleComponent {
  inputLabel = 'Provide module id...';
  inputValue = '';

  constructor(public route: ActivatedRoute) {}
}
