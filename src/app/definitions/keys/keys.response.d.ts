/* Response keys */
export type CharacterResponseKeys =
  | 'appearance'
  | 'backgroundid'
  | 'baseAttributes'
  | 'characterName'
  | 'classes'
  | 'createdTimestamp'
  | 'currency'
  | 'damage_taken'
  | 'equipment'
  | 'id'
  | 'innateProperties'
  | 'inventory'
  | 'levelChoices'
  | 'notes'
  | 'preparedSpells'
  | 'raceid';
export type GameResponseKeys =
  | 'characters'
  | 'coverart'
  | 'description'
  | 'descriptionDetails'
  | 'ownerDisplayName';
export type ErrorResponseKeys = 'message' | 'type';
