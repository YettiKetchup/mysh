import { EntitiesCollection } from '../core/collections';
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
    static combine(name, storageKeys) {
        const newCollection = this.create(name);
        storageKeys.forEach((key) => {
            const collection = this.get(key);
            newCollection.add(...collection.entities);
        });
        return newCollection;
    }
}
//# sourceMappingURL=entity.storage.js.map