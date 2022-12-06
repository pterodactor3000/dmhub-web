import { Injectable } from '@angular/core';
import { KeyValueType } from '@definitions/types';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  mapObjectToArray<T extends {}, K extends {}>(object: T): K[] {
    return Object.values(object) as K[];
  }

  mapObjectToArrayWithKeys<T extends {}, K extends KeyValueType<T>>(
    object: T
  ): K[] {
    return Object.keys(object).map((key: string): K => {
      return { key, value: object[key as keyof T] as T } as K;
    }) as K[];
  }
}
