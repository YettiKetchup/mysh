import { EntitiesCollection } from '../core/collections';
export class EntityStorage {
    static { this._collections = new Map(); }
    static get(key) {
        try {
            return this._collections.get(key);
        }
        catch (e) {
            throw new Error(`Collection ${key} didn't exist!`);
        }
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
    static combine(key, storages) {
        const newCollection = this.create(key);
        storages.forEach((collection) => {
            newCollection.add(...collection.entities);
        });
        return newCollection;
    }
}
//# sourceMappingURL=entity.storage.js.map