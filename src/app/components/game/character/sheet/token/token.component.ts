import { forkJoin, Observable, takeUntil } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/components/base/base.component';
import {
  TokenData,
  Appearance,
  ResponsesTypes,
  Portrait,
  Class,
  QueryParams,
  ImageResponse,
} from '@data/types';
import { LocalService } from '@data/local.service';

@Component({
  selector: 'wbhb-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss'],
})
export class TokenComponent extends BaseComponent implements OnInit {
  private _gameid!: string;
  private _tokenData!: TokenData;
  private _appearance!: Appearance;

  @Input() set tokenData(value: TokenData) {
    this._tokenData = value;
    this._appearance = value.appearance as Appearance;
  }

  get tokenData(): TokenData {
    return this._tokenData;
  }

  get appearance(): Appearance {
    return this._appearance;
  }

  get classes(): Class[] {
    return this.tokenData.classes as Class[];
  }

  portraitData!: Portrait;
  classesData: any[] = [];
  raceData!: any;

  constructor(
    private service: HttpService,
    private localService: LocalService
  ) {
    super();
    this._gameid = this.localService.getData('gameid') as string;
  }

  ngOnInit(): void {
    forkJoin<ResponsesTypes[]>(this.prepareRequestsArray())
      .pipe(takeUntil(this.unsubscribeSubject))
      .subscribe(([...responses]) => {
        this.portraitData = {
          ...(this.tokenData.appearance as Appearance),
          imageUrl: '',
          frameUrl: '',
        };

        for (let [index, resource] of this.getRequestedResources().entries()) {
          switch (true) {
            case resource.startsWith('portrait'): {
              this.portraitData.imageUrl = (
                responses[index] as ImageResponse
              ).url;
              break;
            }
            case resource.startsWith('frame'): {
              this.portraitData.frameUrl = (
                responses[index] as ImageResponse
              ).url;
              break;
            }
            case resource.startsWith('race'): {
              this.raceData = responses[index];
              break;
            }
            case resource.startsWith('class'): {
              this.classesData.push(responses[index]);
              break;
            }
            default:
              break;
          }
        }

        this.clearRequestedResources();
      });
  }

  private prepareRequestsArray(): Observable<ResponsesTypes>[] {
    const requests: Observable<ResponsesTypes>[] = [];
    this.clearRequestedResources();

    requests.push(
      this.service.get(
        this.setRequestObject(
          'image',
          this.appearance.portraitid as string,
          false,
          'portrait'
        )
      )
    );

    this.appearance.portraitframeid
      ? requests.push(
          this.service.get(
            this.setRequestObject(
              'image',
              this.appearance.portraitframeid as string,
              false,
              'frame'
            )
          )
        )
      : {};

    requests.push(
      this.service.get(
        this.setRequestObject('race', this.tokenData.raceid as string)
      )
    );

    for (let [index, charClass] of (
      this.tokenData.classes as Class[]
    ).entries()) {
      requests.push(
        this.service.get(
          this.setRequestObject(
            'class',
            charClass.classid as string,
            false,
            `class-${index}`
          )
        )
      );
    }

    return requests;
  }

  private setRequestObject(
    type: string,
    id: string,
    pretty: boolean = false,
    typeAdditionalInfo?: string
  ): QueryParams {
    this.addRequestedResource(
      `${typeAdditionalInfo ? typeAdditionalInfo : type}`
    );

    return {
      gameid: this._gameid,
      type,
      pretty,
      id,
    };
  }
}
