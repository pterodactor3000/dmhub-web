import { Subject } from 'rxjs';
import { Component } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'wbhb-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  isLoading$: Subject<boolean> = this.loaderService.isLoadingSubject;

  constructor(private loaderService: LoaderService) {}
}
