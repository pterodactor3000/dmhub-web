import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { QueryParams, ResponsesTypes } from './types';
import { mockedObjects } from './mock-data';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  get(query: QueryParams): Observable<ResponsesTypes> {
    return of(mockedObjects);

    return this.http.get<ResponsesTypes>(`${this.getBaseUrl()}query`, {
      params: this.buildParams(query),
    });
  }

  private getBaseUrl(): string {
    return environment.baseUrl;
  }

  private buildParams(query: QueryParams): HttpParams {
    const params = new HttpParams();

    return params
      .append('gameid', query['gameid'])
      .append('pretty', query['pretty']);
  }
}
