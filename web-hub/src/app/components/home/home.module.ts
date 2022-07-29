import { ButtonModule } from './../base/button/button.module';
import { InputModule } from './../base/input/input.module';
import { BaseModule } from './../base/base.module';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    BaseModule,
    InputModule,
    ButtonModule,
    RouterModule.forChild([{ path: '', component: HomeComponent }]),
  ],
})
export class HomeModule {}
