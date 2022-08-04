import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './button.component';
import { WbHbModule } from 'src/app/wb-hb.module';

@NgModule({
  declarations: [ButtonComponent],
  imports: [WbHbModule, ReactiveFormsModule, FormsModule],
  exports: [ButtonComponent],
})
export class ButtonModule {}
