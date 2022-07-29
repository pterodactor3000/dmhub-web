import { FormControl } from '@angular/forms';

/* Keys for indexing purpouses */
export type QueryParamsKeys = 'gameid' | 'type' | 'id' | 'pretty';
export type DataObjectKeys = 'object' | 'desc';
export type CharacterKeys = 'name' | 'owner' | 'summaryDescription' | 'id';
export type CharactersResponseKeys =
  | 'characters'
  | 'coverart'
  | 'description'
  | 'descriptionDetails'
  | 'ownerDisplayName';
export type ButtonKeys =
  | 'button'
  | 'raised-button'
  | 'flat-button'
  | 'stroked-button'
  | 'icon-button'
  | 'fab'
  | 'mini-fab';
export type InputKeys =
  | 'color'
  | 'custom'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'month'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';
export type TypeValueKeys = 'type' | 'value' | 'icon' | 'align' | 'color';
export type InputAdditionalFieldsKeys = 'prefix' | 'suffix' | 'hint';

/* Key for general get */
export type ResponsesTypes = DataObjectsResponse | CharactersResponse;

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

/* Response types */
export type DataObjectsResponse = {
  objects: DataObject[];
};

export type CharactersResponse = {
  [key in CharactersResponseKeys]: Character[] | string;
};

/* Components attributes */
export type ButtonAttributes = {
  type: ButtonKeys;
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
export type TypeValue = {
  [key in TypeValueKeys]?: string | InputAdditionalFieldsKeys;
};
