import { EntitiesCollection } from '../core/collections';
import { CombinedEntitiesCollection } from '../core/collections/combined-entities.collection';
export class EntityStorage {
    static { this._collections = new Map(); }
    static get(key) {
        let collection = this._collections.get(key);
        if (!collection)
            collection = this.create(key);
        return collection;
    }
    static create(key) {
        if (this._collections.has(key)) {
            return this.get(key);
        }
        const collection = new EntitiesCollection();
        this._collections.set(key, collection);
        return collection;
    }
    static destroy(key) {
        this._collections.delete(key);
    }
    static clearAll() {
        this._collections = new Map();
    }
    static combine(key, storageKeys) {
        if (this._collections.has(key)) {
            return this.get(key);
        }
        else {
            const collections = storageKeys.map((key) => this.get(key));
            const collection = new CombinedEntitiesCollection(collections);
            this._collections.set(key, collection);
            return collection;
        }
    }
}
//# sourceMappingURL=entity.storage.js.map