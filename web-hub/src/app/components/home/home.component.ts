import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private hubService: HttpService) {}

  ngOnInit(): void {
    this.hubService
      .get({
        gameid: 'LittleEpicTemperamentalElf',
        type: '',
        id: '',
        pretty: true,
      })
      .subscribe((res) => {
        console.log(res);
      });
  }
}
