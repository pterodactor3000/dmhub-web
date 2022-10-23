import { NgModule } from '@angular/core';
import { WbHbModule } from 'src/app/wb-hb.module';
import { SkillComponent } from './skill.component';

@NgModule({
  declarations: [SkillComponent],
  exports: [SkillComponent],
  imports: [WbHbModule],
})
export class SkillModule {}
