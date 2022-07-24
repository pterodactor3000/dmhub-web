import { CharactersResponse } from './types.d';
import { DataObjectsResponse } from './types';

export const mockedObjects: DataObjectsResponse = {
  objects: [
    {
      object: 'image',
      desc: 'A png or jpeg image.',
    },
    {
      object: 'background',
      desc: "A character's background.",
    },
    {
      object: 'ongoingeffect',
      desc: 'An ongoing effect that applies to a character. Often this will include one or more conditions but will also include information on expiration or other end conditions.',
    },
    {
      object: 'resource',
      desc: 'A resource a character has that can be expended. For instance, action points, spell slots, or class-specific resources such as superiority dice.',
    },
    {
      object: 'charactertype',
      desc: "The basic 'type' of a character. For instance, a game might specify 'epic' characters vs 'regular' characters and give them different basic setups.",
    },
    {
      object: 'condition',
      desc: 'A condition that can apply to a character.',
    },
    {
      object: 'class',
      desc: 'A character class.',
    },
    {
      object: 'currency',
      desc: 'A currency.',
    },
    {
      object: 'attribute',
      desc: "A character's attribute. e.g. strength or dexterity.",
    },
    {
      object: 'damagetype',
      desc: 'Damage types, like slashing, bludgeoning, fire, etc.',
    },
    {
      object: 'equipmentcategory',
      desc: 'Categories items can be placed in. Every item is in exactly one category. Categories are arranged in a hierarchy.',
    },
    {
      object: 'feat',
      desc: 'A character feat.',
    },
    {
      object: 'globalrule',
      desc: 'A global rule that applies to all characters in the game. E.g. if all damage dice are exploding in a game, this would be implemented with a global rule.',
    },
    {
      object: 'language',
      desc: 'A language that characters can speak.',
    },
    {
      object: 'party',
      desc: "A party that characters can be grouped into. Typically there will be one player party, though there could be more. Important NPC's may also be placed in parties.",
    },
    {
      object: 'race',
      desc: "A character's race. e.g. Human, Elf, etc.",
    },
    {
      object: 'skill',
      desc: 'A character skill. E.g. Acrobatics or Athletics.',
    },
    {
      object: 'spell',
      desc: 'A spell.',
    },
    {
      object: 'subclass',
      desc: 'A subclass.',
    },
    {
      object: 'subrace',
      desc: 'A subrace.',
    },
    {
      object: 'item',
      desc: 'An item.',
    },
  ],
};

export const mockedCharacters: CharactersResponse = {
  characters: [
    {
      name: 'Falael',
      owner: 'r5YT9Wp8PVfpYGkLMCHi1JoWD382',
      summaryDescription: 'Level 2 Moon Elf Paladin',
      id: '0a45ceaa-3c01-4b70-b288-f6ebce564980',
    },
    {
      name: 'Obi',
      owner: 'NqyLShjBJpSLkfM2OKxtCln1x8A2',
      summaryDescription: 'Level 2 Yuan-Ti Warlock',
      id: '40f59d7f-9fc3-4c9f-bf03-c6240d34e658',
    },
    {
      name: 'Cutie',
      owner: 'wapNucvICkWJiKer3MXnZ91HtsN2',
      summaryDescription: 'beast',
      id: '5a8b606c-2a1f-42a7-8873-947ddd22cd8b',
    },
    {
      name: 'Slivy Nivy',
      owner: 'ItwKOnRmdWTAOlkes4MXMHt7h0m1',
      summaryDescription: 'Level 2 Fairy Bard',
      id: '8db03e11-1cf9-4cf6-bd16-72adbcf816b7',
    },
    {
      name: 'Peter',
      owner: 'aIkTcE5DQQbPUu7Vttq14LXmj8H3',
      summaryDescription: 'Level 2 Human Fighter',
      id: '94d6833a-5e79-43ac-853e-1120bd556820',
    },
    {
      name: 'Dahb',
      owner: 'wapNucvICkWJiKer3MXnZ91HtsN2',
      summaryDescription: 'Level 2 Grung Rogue',
      id: 'c11b295c-f8b6-4768-99e1-363a6e229043',
    },
  ],
  coverart:
    'https://storage.googleapis.com/dmhub_images/r-SZxquraQ7nzNkmk3MIAw~~',
  description: 'Ghosts of Saltmarsh',
  descriptionDetails:
    'Nestled on the coast of the Azure Sea is Saltmarsh, a small fishing village on the verge of destruction. Join us every Sunday at 11AM Pacific for adventuring fun in Saltmarsh.',
  ownerDisplayName: 'Denivarius',
};
