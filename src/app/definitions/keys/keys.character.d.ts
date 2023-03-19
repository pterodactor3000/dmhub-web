import { LevelKeysNumbers } from './keys';
import { OngoingEffectsListResponseKeys } from './keys.response.d';

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
  | 'actionsFeaturesNotes'
  | 'armorClassSpeed'
  | 'attributes'
  | 'defenses'
  | 'hitpoints'
  | 'ongoingEffects'
  | 'proficiencies'
  | 'resources'
  | 'savingThrows'
  | 'skills'
  | 'token';
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
export type OngoingEffectsKeys = 'id' | 'ongoingEffectId' | 'stacks' | 'time';
export type OngoingEffectsDataKeys = Exclude<
  OngoingEffectsListResponseKeys,
  | '__typeName'
  | '_luaTable'
  | 'ctime'
  | 'custom'
  | 'hidden'
  | 'implementation'
  | 'mtime'
>;
export type OngoingEffectDisplayKeys =
  | 'bgcolor'
  | 'blend'
  | 'brightness'
  | 'hueshift'
  | 'saturation';
export type BgColorObjectKeys = 'a' | 'h' | 's' | 'v';
export type ModifiersKeys =
  | 'activationCondition'
  | 'behavior'
  | 'conditions'
  | 'damageFilterCondition'
  | 'description'
  | 'guid'
  | 'modifyRoll'
  | 'name'
  | 'resistances'
  | 'save'
  | 'skill'
  | 'source'
  | 'sourceguid'
  | 'subtype';
export type EffectModifierResistanceKeys = 'apply' | 'damageType';

// Classes data
export type ClassLevelsListKeys =
  | 'primary'
  | 'multiclass'
  | `level-${LevelKeysNumbers}`;
export type ClassLevelKeys = 'domains' | 'features';
export type CharacterFeatureChoiceKeys =
  | 'allowDuplicateChoices'
  | 'classid'
  | 'description'
  | 'guid'
  | 'name'
  | 'numChoices'
  | 'options'
  | 'prefab'
  | 'source';
export type CharacterFeatureKeys =
  | 'classid'
  | 'description'
  | 'domains'
  | 'guid'
  | 'modifiers'
  | 'name'
  | 'source';
export type ClassLevelFeatureDataKeys =
  | CharacterFeatureKeys
  | CharacterFeatureChoiceKeys;
export type CharacterModifierKeys =
  | 'behavior'
  | 'description'
  | 'domains'
  | 'guid'
  | 'name'
  | 'proficiency'
  | 'skills'
  | 'source'
  | 'sourceguid'
  | 'subtype';
export type FeatureModifierSkillKeys = '';
