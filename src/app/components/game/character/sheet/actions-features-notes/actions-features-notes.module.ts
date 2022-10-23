import { NotesModule } from './notes/notes.module';
import { FeaturesModule } from './features/features.module';
import { ActionsModule } from './actions/actions.module';
import { NgModule } from '@angular/core';
import { ActionsFeaturesNotesComponent } from './actions-features-notes.component';
import { WbHbModule } from 'src/app/wb-hb.module';

@NgModule({
  declarations: [ActionsFeaturesNotesComponent],
  exports: [ActionsFeaturesNotesComponent],
  imports: [WbHbModule, ActionsModule, FeaturesModule, NotesModule],
})
export class ActionsFeaturesNotesModule {}
