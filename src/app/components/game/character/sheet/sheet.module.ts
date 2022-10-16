import { ListModule } from './list/list.module';
import { ActionsFeaturesNotesModule } from './actions-features-notes/actions-features-notes.module';
import { HitpointsModule } from './hitpoints/hitpoints.module';
import { ArmorClassSpeedModule } from './armor-class-speed/armor-class-speed.module';
import { SkillsModule } from './skills/skills.module';
import { ResourcesModule } from './resources/resources.module';
import { AttributesModule } from './attributes/attributes.module';
import { TokenModule } from './token/token.module';
import { WbHbModule } from 'src/app/wb-hb.module';
import { NgModule } from '@angular/core';
import { SheetComponent } from './sheet.component';
import { SheetRoutingModule } from './sheet-routing.module';

@NgModule({
  declarations: [SheetComponent],
  imports: [
    WbHbModule,
    SheetRoutingModule,
    TokenModule,
    AttributesModule,
    ResourcesModule,
    SkillsModule,
    ArmorClassSpeedModule,
    HitpointsModule,
    ActionsFeaturesNotesModule,
    ListModule,
  ],
  exports: [SheetComponent],
})
export class SheetModule {}
