import { AttributesKeys } from '@definitions/keys';
import { QueryParamsKeys } from '../keys/keys';
import {
  GameResponseKeys,
  CharacterResponseKeys,
  ErrorResponseKeys,
  OngoingEffectsListResponseKeys,
  ClassesListResponseKeys,
} from '../keys/keys.response';
import { DataObject, Guid, NumberedObjectType } from './types';
import {
  Character,
  Note,
  Class,
  Appearance,
  Attributes,
  EffectModifiers,
  OngoingEffectDisplay,
  ClassLevelsList,
} from './types.character';

/* Key for general get */
export type ResponsesTypes =
  | ImageResponse
  | DataObjectsResponse
  | GameResponse
  | ErrorResponse
  | CharacterResponse
  | OngoingEffectsListResponse
  | ClassesListResponse;

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

export type OngoingEffectsListResponse = {
  [key: Guid]: OngoingEffectsResponse;
};

export type ClassesListResponse = {
  [key: Guid]: ClassesResponse;
};

export type OngoingEffectsResponse = {
  [key in OngoingEffectsListResponseKeys]?:
    | boolean
    | number
    | string
    | Guid
    | OngoingEffectDisplay
    | OngoingEffectModifier;
};

export type ClassesResponse = {
  [key in ClassesListResponseKeys]?:
    | boolean
    | string
    | number
    | Guid
    | ClassLevelsList
    | NumberedObjectType<AttributesKeys>;
};

export type OngoingEffectModifier = {
  [key: string]: EffectModifiers;
};

export type QueryParams = {
  [key in QueryParamsKeys]: string | boolean;
};
