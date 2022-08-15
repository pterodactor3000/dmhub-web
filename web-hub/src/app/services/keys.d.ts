/* Response keys */
export type CharacterResponseKeys =
  | 'appearance'
  | 'characterName'
  | 'createdTimestamp'
  | 'baseAttributes'
  | 'classes'
  | 'currency'
  | 'damage_taken'
  | 'equipment'
  | 'inventory'
  | 'levelChoices'
  | 'raceid'
  | 'backgroundid'
  | 'preparedSpells'
  | 'innateProperties'
  | 'notes';
export type GameResponseKeys =
  | 'characters'
  | 'coverart'
  | 'description'
  | 'descriptionDetails'
  | 'ownerDisplayName';
export type ErrorResponseKeys = 'message' | 'type';

/* Keys for indexing purpouses */
export type QueryParamsKeys = 'gameid' | 'type' | 'id' | 'pretty';
export type DataObjectKeys = 'object' | 'desc';
export type CharacterKeys = 'name' | 'owner' | 'summaryDescription' | 'id';
export type NotesKeys = 'text' | 'title';
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
export type AppearanceKeys =
  | 'portraitOffset'
  | 'tokenZoom'
  | 'portraitid'
  | 'portraitframeid';
export type OffsetKeys = 'x' | 'y';
export type AttributesKeys = 'cha' | 'con' | 'dex' | 'int' | 'str' | 'wis';
export type ClassKeys = 'classid' | 'level';
