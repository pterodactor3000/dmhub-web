/* Keys regarding character data */
export type CharacterKeys = 'name' | 'owner' | 'summaryDescription' | 'id';
export type AppearanceKeys =
  | 'portraitOffset'
  | 'tokenZoom'
  | 'portraitid'
  | 'portraitframeid';
export type PortraitKeys = 'imageUrl' | 'frameUrl';
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
export type CharacterSheetFieldKeys =
  | 'token'
  | 'attributes'
  | 'skills'
  | 'resources'
  | 'hitpoints'
  | 'armorClassSpeed'
  | 'actionsFeaturesNotes'
  | 'savingThrows'
  | 'proficiencies'
  | 'defenses';
export type CharacterSheetFieldDataKeys = `${CharacterSheetFieldKeys}Data`;
export type TokenKeys = 'appearance' | 'characterName' | 'classes' | 'raceid';
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
