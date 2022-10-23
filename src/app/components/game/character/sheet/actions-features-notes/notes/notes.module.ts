import { NotesComponent } from './notes.component';
import { NgModule } from '@angular/core';
import { WbHbModule } from 'src/app/wb-hb.module';

@NgModule({
  declarations: [NotesComponent],
  exports: [NotesComponent],
  imports: [WbHbModule],
})
export class NotesModule {}
