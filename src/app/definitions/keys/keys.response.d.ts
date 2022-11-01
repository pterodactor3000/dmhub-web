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
