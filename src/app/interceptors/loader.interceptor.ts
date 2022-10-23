import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { BehaviorSubject, Observable, of, timer } from 'rxjs';
import { debounce, finalize, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class LoaderInterceptor implements HttpInterceptor {
  private activeRequestCount: BehaviorSubject<number> =
    new BehaviorSubject<number>(0);

  isLoading: Observable<boolean> = this.activeRequestCount.pipe(
    map((count) => count > 0),
    debounce((busy) => (busy ? timer(200) : of(0)))
  );

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next
      .handle(request)
      .pipe(
        finalize(() =>
          this.activeRequestCount.next(this.activeRequestCount.getValue() - 1)
        )
      );
  }
}
