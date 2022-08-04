import { Component } from '@angular/core';
import { takeUntil } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import {
  ResponsesTypes,
  GameResponse,
  ErrorResponse,
  Character,
} from 'src/app/services/types';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'wbhb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends BaseComponent {
  data!: GameResponse;
  characters!: Character[];

  inputLabel = 'Provide game id...';
  inputValue = 'LittleEpicTemperamentalElf';

  constructor(private hubService: HttpService) {
    super();
  }

  onSubmit(): void {
    this.hubService
      .get({
        gameid: this.inputValue, //LittleEpicTemperamentalElf
        type: '',
        id: '',
        pretty: true,
      })
      .pipe(takeUntil(this.unsubscribeSubject))
      .subscribe({
        next: (res: ResponsesTypes) => {
          if (this.isError(res)) {
            window.alert((res as ErrorResponse)['message']);
          }
          this.data = res as GameResponse;
        },
      });
  }

  private isError(response: ResponsesTypes): boolean {
    return (
      Object.keys(response).includes('type') &&
      Object.values(response).includes('error')
    );
  }
}
