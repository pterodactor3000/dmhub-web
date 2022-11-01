import { NgModule } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { MessageComponent } from './message.component';
import { WbHbModule } from 'src/app/wb-hb.module';

@NgModule({
  declarations: [MessageComponent],
  imports: [WbHbModule, NgbAlertModule],
  exports: [MessageComponent],
})
export class MessageModule {}
