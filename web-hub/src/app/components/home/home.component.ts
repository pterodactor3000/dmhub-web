import { Component } from '@angular/core';
import { takeUntil } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { DataObjectsResponse } from 'src/app/services/types';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'wbhb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends BaseComponent {
  data!: DataObjectsResponse;

  inputLabel = 'Provide game id...';
  inputValue = '';

  constructor(private hubService: HttpService) {
    super();
  }

  onClick(): void {
    this.hubService
      .get({
        gameid: this.inputValue, //LittleEpicTemperamentalElf
        type: '',
        id: '',
        pretty: true,
      })
      .pipe(takeUntil(this.unsubscribeSubject))
      .subscribe((res) => {
        this.data = res as DataObjectsResponse;
        console.log(res);
      });
  }
}
