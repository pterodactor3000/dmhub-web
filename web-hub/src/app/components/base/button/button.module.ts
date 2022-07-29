import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MaterialModule],
  exports: [ButtonComponent],
})
export class ButtonModule {}
