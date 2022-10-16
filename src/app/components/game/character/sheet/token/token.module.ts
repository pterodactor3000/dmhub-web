import { PortraitModule } from './portrait/portrait.module';
import { WbHbModule } from 'src/app/wb-hb.module';
import { NgModule } from '@angular/core';
import { TokenComponent } from './token.component';

@NgModule({
  declarations: [TokenComponent],
  imports: [WbHbModule, PortraitModule],
  exports: [TokenComponent],
})
export class TokenModule {}
