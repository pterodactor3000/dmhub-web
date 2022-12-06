import { KeyValueKeys } from './../keys/keys.d';
import { FormControl } from '@angular/forms';

import { DataObjectKeys, InputKeys, MessageTypeKeys } from '../keys/keys';
import { TypeValue } from './types.character';

/* Generics and mapped types */
export type KeyValueType<Type> = {
  [key in KeyValueKeys]: string | number | Type;
};

export type DataObject = {
  [key in DataObjectKeys]: string;
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

export type MessageAttributes = {
  type: MessageTypeKeys;
  dismissible: boolean;
};

/* Additional types */
export type Guid = string;
