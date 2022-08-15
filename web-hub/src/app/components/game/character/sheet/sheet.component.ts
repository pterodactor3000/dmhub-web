import { switchMap, takeUntil } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BaseComponent } from 'src/app/components/base/base.component';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'wbhb-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.scss'],
})
export class SheetComponent extends BaseComponent implements OnInit {
  character!: any;

  constructor(
    // private router: Router,
    private route: ActivatedRoute,
    private service: HttpService
  ) {
    super();
  }

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params: Params) =>
          this.service.get({
            gameid: params['gameid'],
            pretty: true,
            type: 'character',
            id: params['characterid'],
          })
        )
      )
      .pipe(takeUntil(this.unsubscribeSubject))
      .subscribe((character) => (this.character = character));
  }
}
