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
export type OngoingEffectsListResponseKeys =
  | '__typeName'
  | '_luaTable'
  | 'canEndWithAction'
  | 'condition'
  | 'ctime'
  | 'custom'
  | 'description'
  | 'display'
  | 'emoji'
  | 'endActionType'
  | 'guid'
  | 'hidden'
  | 'iconid'
  | 'id'
  | 'implementation'
  | 'modifiers'
  | 'mtime'
  | 'name'
  | 'source'
  | 'stackable'
  | 'statusEffect'
  | 'transformation';
