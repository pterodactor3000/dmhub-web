import { SkillModule } from './skill/skill.module';
import { NgModule } from '@angular/core';
import { SkillsComponent } from './skills.component';
import { WbHbModule } from 'src/app/wb-hb.module';

@NgModule({
  declarations: [SkillsComponent],
  exports: [SkillsComponent],
  imports: [WbHbModule, SkillModule],
})
export class SkillsModule {}
