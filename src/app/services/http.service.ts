import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QueryParams, ResponsesTypes } from './types';
import { QueryParamsKeys } from './keys';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  get(query: QueryParams): Observable<ResponsesTypes> {
    return this.http.get<ResponsesTypes>(`${this.getBaseUrl()}query`, {
      params: this.buildParams(query),
    });
  }

  private getBaseUrl(): string {
    return environment.baseUrl;
  }

  private buildParams(query: QueryParams): HttpParams {
    let params = new HttpParams();

    for (const key in query) {
      if (query[key as QueryParamsKeys]) {
        params = params.append(key, query[key as QueryParamsKeys]);
      }
    }

    return params;
  }
}
