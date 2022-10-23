import { API_URL } from './tokens/api';
import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QueryParams, ResponsesTypes } from '@definitions/types';
import { QueryParamsKeys } from '@definitions/keys';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(
    private http: HttpClient,
    @Inject(API_URL) private apiUrl: string
  ) {}

  get(query: QueryParams): Observable<ResponsesTypes> {
    return this.http.get<ResponsesTypes>(`${this.apiUrl}query`, {
      params: this.buildParams(query),
    });
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
