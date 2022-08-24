import { WbHbModule } from 'src/app/wb-hb.module';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { InputModule } from '../base/input/input.module';
import { ButtonModule } from '../base/button/button.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    WbHbModule,
    LoginRoutingModule,
    InputModule,
    ButtonModule,
    FormsModule,
  ],
  exports: [LoginComponent],
})
export class LoginModule {}
