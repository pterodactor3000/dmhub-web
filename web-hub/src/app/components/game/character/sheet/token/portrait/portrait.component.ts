import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'wbhb-portrait',
  templateUrl: './portrait.component.html',
  styleUrls: ['./portrait.component.scss'],
})
export class PortraitComponent implements OnInit {
  @Input() data!: any;
  constructor() {}

  ngOnInit(): void {}
}
