import { environment } from './../environments/environment';
import { Component } from '@angular/core';

@Component({
  selector: 'wbhb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = environment.title;
}
