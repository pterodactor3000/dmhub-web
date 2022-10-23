import { NgModule } from '@angular/core';
import { ButtonModule } from '@base/button/button.module';
import { MessageModule } from '@base/message/message.module';
import { WbHbModule } from 'src/app/wb-hb.module';
import { UpdateComponent } from './update.component';

@NgModule({
  declarations: [UpdateComponent],
  imports: [WbHbModule, ButtonModule, MessageModule],
  exports: [UpdateComponent],
})
export class UpdateModule {}
