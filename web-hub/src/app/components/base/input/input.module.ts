import { NgModule } from '@angular/core';
import { InputComponent } from './input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WbHbModule } from 'src/app/wb-hb.module';

@NgModule({
  declarations: [InputComponent],
  imports: [WbHbModule, ReactiveFormsModule, FormsModule],
  exports: [InputComponent],
})
export class InputModule {}
