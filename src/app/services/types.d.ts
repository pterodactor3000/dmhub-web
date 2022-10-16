import { CharacterSheetFieldDataKeys, ClassKeys, TokenKeys } from './keys.d';
import { FormControl } from '@angular/forms';
import {
  QueryParamsKeys,
  DataObjectKeys,
  CharacterKeys,
  NotesKeys,
  GameResponseKeys,
  CharacterResponseKeys,
  ErrorResponseKeys,
  InputKeys,
  TypeValueKeys,
  InputAdditionalFieldsKeys,
  AppearanceKeys,
  OffsetKeys,
  AttributesKeys,
  PortraitKeys,
} from './keys';

/* Key for general get */
export type ResponsesTypes =
  | ImageResponse
  | DataObjectsResponse
  | GameResponse
  | ErrorResponse
  | CharacterResponse;

/* Response types */
export type DataObjectsResponse = {
  objects: DataObject[];
};

export type GameResponse = {
  [key in GameResponseKeys]: Character[] | string;
};

export type CharacterResponse = {
  [key in CharacterResponseKeys]:
    | string
    | number
    | Note[]
    | Class[]
    | Appearance
    | Attributes;
};

export type ErrorResponse = {
  [key in ErrorResponseKeys]: string;
};

export type ImageResponse = {
  url: string;
};

/* Types with keys for indexing */
export type QueryParams = {
  [key in QueryParamsKeys]: string | boolean;
};

export type DataObject = {
  [key in DataObjectKeys]: string;
};

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

/* Components attributes */
export type ButtonAttributes = {
  color: string;
  label: string;
  disabled?: boolean;
  icon?: string;
};

export type InputAttributes = {
  type: InputKeys;
  label: string;
  value: string;
  form?: FormControl;
  additionalFields?: TypeValue[];
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
  autoResize?: boolean;
  clearable?: boolean;
  required?: boolean;
};

/* Additional types */
export type Guid = string;
