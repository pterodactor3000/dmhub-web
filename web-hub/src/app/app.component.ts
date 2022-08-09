import { Component } from '@angular/core';
import { environment } from '@env';

@Component({
  selector: 'wbhb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = environment.title;
}
