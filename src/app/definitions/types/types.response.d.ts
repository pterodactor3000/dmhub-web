import { QueryParamsKeys } from '../keys/keys';
import {
  GameResponseKeys,
  CharacterResponseKeys,
  ErrorResponseKeys,
  OngoingEffectResponseKeys,
} from '../keys/keys.response';
import { DataObject, Guid } from './types';
import {
  Character,
  Note,
  Class,
  Appearance,
  Attributes,
  EffectModifiers,
  OngoingEffectDisplay,
} from './types.character';

/* Key for general get */
export type ResponsesTypes =
  | ImageResponse
  | DataObjectsResponse
  | GameResponse
  | ErrorResponse
  | CharacterResponse
  | OngoingEffectResponse;

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

export type OngoingEffectResponse = {
  [key in OngoingEffectResponseKeys]?:
    | boolean
    | string
    | Guid
    | EffectModifiers[]
    | OngoingEffectDisplay;
};

export type QueryParams = {
  [key in QueryParamsKeys]: string | boolean;
};
