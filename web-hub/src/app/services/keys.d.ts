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
export type CurrencyKeys = 'history' | 'value';
export type HistoryKeys = 'entries';
export type EntryKeys = 'set' | 'timestamp' | 'userid';
export type EquipmentKeys = 'armor' | 'mainhand' | 'offhand';
export type InventoryKeys = 'quantity' | 'slots';
export type SlotKeys = 'slot';
export type PreparedSpellsKeys = 'timestamp';
export type InnatePropertiesKeys =
  | 'attacks'
  | 'savingThrows'
  | 'skillProficiencies';

export type CharacterDetailsKeys =
  | 'raceid'
  | 'backgroundid'
  | 'damage_taken'
  | 'characterName'
  | 'createdTimestamp'
  | 'appearance'
  | 'baseAttributes'
  | 'classes'
  | 'currency'
  | 'equipment'
  | 'inventory'
  | 'levelChoices'
  | 'innateProperties'
  | 'notes'
  | 'preparedSpells';
