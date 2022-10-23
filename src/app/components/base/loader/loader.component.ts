import { Observable } from 'rxjs';
import { Component, inject } from '@angular/core';
import { LoaderInterceptor } from '@services/loader.interceptor';

@Component({
  selector: 'wbhb-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  isLoading: Observable<boolean> = inject(LoaderInterceptor)?.isLoading;
}
