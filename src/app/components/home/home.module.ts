import { LoginModule } from './../login/login.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { WbHbModule } from 'src/app/wb-hb.module';
import { HomeComponent } from './home.component';
import { LoaderModule } from './../base/loader/loader.module';
import { GameModule } from './../game/game.module';
import { ButtonModule } from './../base/button/button.module';
import { InputModule } from './../base/input/input.module';
import { BaseModule } from './../base/base.module';
import { ModuleModule } from './../module/module.module';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    WbHbModule,
    BaseModule,
    HomeRoutingModule,
    InputModule,
    ButtonModule,
    FormsModule,
    GameModule,
    ModuleModule,
    LoaderModule,
    LoginModule,
  ],
})
export class HomeModule {}
