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
} from '../keys/keys.character';

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
  [key in CharacterSheetFieldDataKeys]?: TokenData;
};

export type TokenData = {
  [key in TokenKeys]: Appearance | Class[] | string;
};

export type Portrait = {
  [key in AppearanceKeys | PortraitKeys]: string | number | Offset;
};