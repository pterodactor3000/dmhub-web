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
  | 'ongoingEffects'
  | 'preparedSpells'
  | 'raceid';
export type GameResponseKeys =
  | 'characters'
  | 'coverart'
  | 'description'
  | 'descriptionDetails'
  | 'ownerDisplayName';
export type ErrorResponseKeys = 'message' | 'type';
export type OngoingEffectResponseKeys =
  | 'canEndWithAction'
  | 'description'
  | 'display'
  | 'emoji'
  | 'endActionType'
  | 'guid'
  | 'iconid'
  | 'id'
  | 'modifiers'
  | 'mtime'
  | 'name'
  | 'source';
