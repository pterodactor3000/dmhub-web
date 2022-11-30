import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  mapObjectToArray<T extends {}, K extends {}>(object: T): K[] {
    return Object.values(object) as K[];
  }
}
