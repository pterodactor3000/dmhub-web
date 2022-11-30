import {
  BgColorObjectKeys,
  CharacterSheetFieldKeys,
  EffectModifierResistanceKeys,
  ModifiersKeys,
  OngoingEffectsDataKeys,
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
  OngoingEffectsKeys,
  OngoingEffectDisplayKeys,
} from '../keys/keys.character';
import { Guid } from './types';

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

export type SheetDataType = TokenData | OngoingEffectsData[];

export type TokenData = {
  [key in TokenKeys]: Appearance | Class[] | string;
};

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
