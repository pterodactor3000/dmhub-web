import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  template: '',
})
export class BaseComponent implements OnDestroy {
  private _requestedResources!: string[];

  unsubscribeSubject = new Subject<void>();

  protected addRequestedResource(value: string): void {
    this._requestedResources.push(value);
  }

  protected setRequestedResources(values: string[]): void {
    this._requestedResources.push(...values);
  }

  protected getRequestedResources(): string[] {
    return this._requestedResources;
  }

  protected getRequestedResource(index: number): string {
    return this._requestedResources[index];
  }

  protected clearRequestedResources(): void {
    this._requestedResources = [];
  }

  ngOnDestroy(): void {
    this.unsubscribeSubject.next();
    this.unsubscribeSubject.complete();
  }
}
