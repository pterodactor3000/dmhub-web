import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { DataObjectsResponse } from 'src/app/services/types';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends BaseComponent implements OnInit {
  data!: DataObjectsResponse;

  constructor(private hubService: HttpService) {
    super();
  }

  ngOnInit(): void {
    this.hubService
      .get({
        gameid: 'LittleEpicTemperamentalElf',
        type: '',
        id: '',
        pretty: true,
      })
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((res) => {
        this.data = res as DataObjectsResponse;
        console.log(res);
      });
  }
}
