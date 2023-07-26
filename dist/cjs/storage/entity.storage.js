"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityStorage = void 0;
const collections_1 = require("../core/collections");
class EntityStorage {
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
        const collection = new collections_1.EntitiesCollection();
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
exports.EntityStorage = EntityStorage;
//# sourceMappingURL=entity.storage.js.map