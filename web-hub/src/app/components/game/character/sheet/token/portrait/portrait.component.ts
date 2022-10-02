import { Component, Input, OnInit } from '@angular/core';
import { Portrait } from '@data/types';

@Component({
  selector: 'wbhb-portrait',
  templateUrl: './portrait.component.html',
  styleUrls: ['./portrait.component.scss'],
})
export class PortraitComponent implements OnInit {
  @Input() data!: Portrait;

  borderImage!: string;

  ngOnInit(): void {
    this.borderImage = `border-image: url(${
      this.data.frameUrl || ''
    }) 74 / 150px / 0`;
  }
}
