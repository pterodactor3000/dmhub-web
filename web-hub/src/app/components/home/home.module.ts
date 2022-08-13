import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { WbHbModule } from 'src/app/wb-hb.module';
import { HomeComponent } from './home.component';
import { LoaderModule } from './../base/loader/loader.module';
import { GameModule } from './../game/game.module';
import { ButtonModule } from './../base/button/button.module';
import { InputModule } from './../base/input/input.module';
import { BaseModule } from './../base/base.module';
import { ModuleModule } from './../module/module.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    WbHbModule,
    BaseModule,
    InputModule,
    ButtonModule,
    FormsModule,
    GameModule,
    ModuleModule,
    LoaderModule,
    RouterModule.forChild([{ path: '', component: HomeComponent }]),
  ],
})
export class HomeModule {}
