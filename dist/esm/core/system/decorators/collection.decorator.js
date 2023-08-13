import { uid } from '../../../tools/utils';
import { EntityStorage } from '../../storage';
export function Collection(keys) {
    return function (constructor) {
        const collection = EntityStorage.combine(uid(), keys);
        constructor.prototype.redefinedCollection = collection;
    };
}
//# sourceMappingURL=collection.decorator.js.map