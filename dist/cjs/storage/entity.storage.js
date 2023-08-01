"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityStorage = void 0;
const collections_1 = require("../core/collections");
class EntityStorage {
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
        const collection = new collections_1.EntitiesCollection();
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
exports.EntityStorage = EntityStorage;
//# sourceMappingURL=entity.storage.js.map