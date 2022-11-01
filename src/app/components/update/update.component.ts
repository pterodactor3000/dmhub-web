import { Component, inject } from '@angular/core';
import { UnrecoverableStateEvent, VersionEvent } from '@angular/service-worker';
import { UpdateService } from '@services/update.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'wbhb-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent {
  private updateService = inject(UpdateService);

  updateAvailable: Observable<VersionEvent> =
    this.updateService.updateAvailable;
  unrecoverableError: Observable<UnrecoverableStateEvent> =
    this.updateService.unrecoverableError;

  activateUpdate(): void {
    this.updateService.update();
  }

  reloadApp(): void {
    this.updateService.reloadApp();
  }
}
