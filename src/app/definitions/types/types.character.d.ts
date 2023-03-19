import {
  BgColorObjectKeys,
  ClassLevelKeys,
  ClassLevelsListKeys,
  EffectModifierResistanceKeys,
  CharacterModifierKeys,
  FeatureModifierSkillKeys,
  ModifiersKeys,
  OngoingEffectsDataKeys,
  ClassLevelFeatureDataKeys,
  CharacterFeatureChoiceKeys,
} from './../keys/keys.character.d';
import {
  NotesKeys,
  TypeValueKeys,
  InputAdditionalFieldsKeys,
} from '../keys/keys';
import {
  CharacterKeys,
  OffsetKeys,
  AppearanceKeys,
  AttributesKeys,
  ClassKeys,
  CharacterSheetFieldDataKeys,
  TokenKeys,
  PortraitKeys,
  OngoingEffectDisplayKeys,
} from '../keys/keys.character';
import {
  Guid,
  KeyValueType,
  NumberedObjectType,
  StringBoolType,
} from './types';

export type Character = {
  [key in CharacterKeys]: string;
};

export type Note = {
  [key in NotesKeys]: string;
};

export type TypeValue = {
  [key in TypeValueKeys]?: string | InputAdditionalFieldsKeys;
};

export type Offset = {
  [key in OffsetKeys]: number;
};

export type Appearance = {
  [key in AppearanceKeys]: string | number | Offset;
};

export type Attributes = {
  [key in AttributesKeys]: number;
};

export type Class = {
  [key in ClassKeys]: string | number;
};

export type SheetData = {
  [key in CharacterSheetFieldDataKeys]?: SheetDataType;
};

export type SheetDataType = TokenData | OngoingEffectsData[] | AttributeData[];

export type TokenData = {
  [key in TokenKeys]: Appearance | Class[] | string;
};

export type AttributeData = KeyValueType<AttributesKeys>;

export type OngoingEffectsData = {
  [key in OngoingEffectsDataKeys]:
    | boolean
    | Guid
    | number
    | string
    | OngoingEffectDisplay
    | EffectModifiers[];
};

export type OngoingEffectDisplay = {
  [key in OngoingEffectDisplayKeys]: BgColorObject | boolean | string | number;
};

export type BgColorObject = {
  [key in BgColorObjectKeys]: string | number;
};

export type EffectModifiers = {
  [key in ModifiersKeys]?: EffectModifierResistance[] | Guid | string;
};

export type EffectModifierResistance = {
  [key in EffectModifierResistanceKeys]: string;
};

export type Portrait = {
  [key in AppearanceKeys | PortraitKeys]: string | number | Offset;
};

// Classes types
export type ClassLevelsList = {
  [key in ClassLevelsListKeys]: ClassLevel;
};

export type ClassLevel = {
  [key in ClassLevelKeys]:
    | StringBoolType
    | NumberedObjectType<CharacterFeature>;
};

// CharacterFeature
export type CharacterFeature = {
  [key in ClassLevelFeatureDataKeys]?:
    | boolean
    | string
    | Guid
    | StringBoolType
    | NumberedObjectType<
        CharacterModifier | CharacterFeatureChoice | CharacterFeature
      >;
};

export type CharacterModifier = {
  [key in CharacterModifierKeys]: string | Guid | StringBoolType;
};

export type CharacterFeatureChoice = {
  [key in CharacterFeatureChoiceKeys]: boolean | number | string | Guid;
};

export type FeatureModifierSkill = {
  [key in FeatureModifierSkillKeys]: boolean;
};
