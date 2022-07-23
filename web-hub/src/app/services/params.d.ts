export type QueryParams = {
  [key in 'gameid' | 'type' | 'id' | 'pretty']: string | boolean;
};
