/* Keys for indexing purpouses */
export type QueryParamsKeys = 'gameid' | 'type' | 'id' | 'pretty';
export type DataObjectKeys = 'object' | 'desc';
export type CharacterKeys = 'name' | 'owner' | 'summaryDescription' | 'id';
export type CharactersResponseKeys =
  | 'characters'
  | 'coverart'
  | 'description'
  | 'descriptionDetails'
  | 'ownerDisplayName';

/* Key for general get */
export type ResponsesTypes = DataObjectsResponse | CharactersResponse;

/* Types with keys for indexing */
export type QueryParams = {
  [key in QueryParamsKeys]: string | boolean;
};

export type DataObject = {
  [key in DataObjectKeys]: string;
};

export type Character = {
  [key in CharacterKeys]: string;
};

/* Response types */
export type DataObjectsResponse = {
  objects: DataObject[];
};

export type CharactersResponse = {
  [key in CharactersResponseKeys]: Character[] | string;
};
