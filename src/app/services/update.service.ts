import { environment } from '@env';
import { ApplicationRef, Injectable } from '@angular/core';
import { SwUpdate, VersionEvent } from '@angular/service-worker';
import { concat, filter, first, interval, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UpdateService {
  updateAvailable: Observable<VersionEvent> = this.swUpdate.versionUpdates.pipe(
    filter((event) => event.type === 'VERSION_READY')
  );
  unrecoverableError = this.swUpdate.unrecoverable;

  constructor(private swUpdate: SwUpdate, private appRef: ApplicationRef) {
    if (!this.swUpdate.isEnabled) {
      return;
    }

    const isStable = appRef.isStable.pipe(first(Boolean));
    const refreshRate = interval(environment.refreshRate);

    concat(isStable, refreshRate).subscribe(() =>
      this.swUpdate.checkForUpdate()
    );
  }

  reloadApp(): void {
    document.location.reload();
  }

  update(): void {
    this.swUpdate.activateUpdate().then((activated) => {
      if (activated) {
        this.reloadApp();
      }
    });
  }
}
