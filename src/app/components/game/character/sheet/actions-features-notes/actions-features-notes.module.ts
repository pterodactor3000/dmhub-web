import { NotesModule } from './notes/notes.module';
import { FeaturesModule } from './features/features.module';
import { ActionsModule } from './actions/actions.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionsFeaturesNotesComponent } from './actions-features-notes.component';

@NgModule({
  declarations: [ActionsFeaturesNotesComponent],
  exports: [ActionsFeaturesNotesComponent],
  imports: [CommonModule, ActionsModule, FeaturesModule, NotesModule],
})
export class ActionsFeaturesNotesModule {}
