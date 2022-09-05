import { takeUntil } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/components/base/base.component';
import { TokenData, ImageResponse, Appearance } from '@data/types';
import { LocalService } from '@data/local.service';

@Component({
  selector: 'wbhb-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss'],
})
export class TokenComponent extends BaseComponent implements OnInit {
  @Input() tokenData!: TokenData;

  portraitData!: any;
  classesData!: any;

  constructor(
    private service: HttpService,
    private localService: LocalService
  ) {
    super();
  }

  ngOnInit(): void {
    console.log(this.tokenData);
    this.service
      .get({
        gameid: this.localService.getData('gameid') as string,
        type: 'image',
        pretty: false,
        id: (this.tokenData.appearance as Appearance).portraitid as string,
      })
      .pipe(takeUntil(this.unsubscribeSubject))
      .subscribe(
        (image) =>
          (this.portraitData = {
            ...(this.tokenData.appearance as Appearance),
            imageUrl: (image as ImageResponse).url,
          })
      );
  }
}
