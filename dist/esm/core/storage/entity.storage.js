import { EntitiesCollection } from "../collections";
export class EntityStorage {
    constructor() {
        this._collections = new Map();
    }
    get(key) {
        try {
            return this._collections.get(key);
        }
        catch (e) {
            throw new Error(`Collection ${key} didn't exist!`);
        }
    }
    create(key) {
        if (this._collections.has(key)) {
            return this.get(key);
        }
        const collection = new EntitiesCollection();
        this._collections.set(key, collection);
        return collection;
    }
    destroy(key) {
        this._collections.delete(key);
    }
    clearAll() {
        this._collections = new Map();
    }
    combine(key, storages) {
        const newCollection = this.create(key);
        storages.forEach((collection) => {
            newCollection.add(...collection.entities);
        });
        return newCollection;
    }
}
//# sourceMappingURL=entity.storage.js.map