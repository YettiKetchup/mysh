import { uid } from '../../../tools/utils';
import { EntityStorage } from '../../storage';

export function Collection(keys: string[]) {
  return function (constructor: Function) {
    const collection = EntityStorage.combine(uid(), keys);
    constructor.prototype.redefinedCollection = collection;
  };
}
