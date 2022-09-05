import { SkillModule } from './skill/skill.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';

@NgModule({
  declarations: [SkillsComponent],
  exports: [SkillsComponent],
  imports: [CommonModule, SkillModule],
})
export class SkillsModule {}
