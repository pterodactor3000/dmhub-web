import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { WbHbModule } from 'src/app/wb-hb.module';
import { ActionsFeaturesNotesModule } from './actions-features-notes/actions-features-notes.module';
import { ArmorClassSpeedModule } from './armor-class-speed/armor-class-speed.module';
import { AttributesModule } from './attributes/attributes.module';
import { ConditionsModule } from './conditions/conditions.module';
import { HitpointsModule } from './hitpoints/hitpoints.module';
import { ListModule } from './list/list.module';
import { ProficienciesModule } from './proficiencies/proficiencies.module';
import { ResourcesModule } from './resources/resources.module';
import { SheetComponent } from './sheet.component';
import { SheetRoutingModule } from './sheet-routing.module';
import { SkillsModule } from './skills/skills.module';
import { TokenModule } from './token/token.module';
import * as fromSheet from './store/reducers/sheet.reducer';
import { SheetEffects } from './store/effects/sheet.effects';
import * as fromOngoingEffects from './store/reducers/ongoing-effects.reducer';
import { OngoingEffectsEffects } from './store/effects/ongoing-effects.effects';
import * as fromClass from './store/reducers/class.reducer';
import { ClassEffects } from './store/effects/class.effects';

@NgModule({
  declarations: [SheetComponent],
  imports: [
    WbHbModule,
    SheetRoutingModule,
    ActionsFeaturesNotesModule,
    ArmorClassSpeedModule,
    AttributesModule,
    ConditionsModule,
    HitpointsModule,
    ListModule,
    ProficienciesModule,
    ResourcesModule,
    SkillsModule,
    TokenModule,
    StoreModule.forFeature(fromSheet.sheetFeatureKey, fromSheet.reducer),
    StoreModule.forFeature(fromClass.classFeatureKey, fromClass.reducer),
    StoreModule.forFeature(
      fromOngoingEffects.ongoingEffectsFeatureKey,
      fromOngoingEffects.reducer
    ),
    EffectsModule.forFeature([
      SheetEffects,
      OngoingEffectsEffects,
      ClassEffects,
    ]),
  ],
  exports: [SheetComponent],
})
export class SheetModule {}
