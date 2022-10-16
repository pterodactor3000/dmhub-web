import { NotesComponent } from './notes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NotesComponent],
  exports: [NotesComponent],
  imports: [CommonModule],
})
export class NotesModule {}
