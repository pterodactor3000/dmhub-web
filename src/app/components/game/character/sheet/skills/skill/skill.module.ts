import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillComponent } from './skill.component';

@NgModule({
  declarations: [SkillComponent],
  exports: [SkillComponent],
  imports: [CommonModule],
})
export class SkillModule {}
