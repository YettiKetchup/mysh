"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityStorage = void 0;
const collections_1 = require("../collections");
const combined_entities_collection_1 = require("../collections/combined-entities.collection");
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
    static combine(key, storageKeys) {
        if (this._collections.has(key)) {
            return this.get(key);
        }
        else {
            const collections = storageKeys.map((key) => this.get(key));
            const collection = new combined_entities_collection_1.CombinedEntitiesCollection(collections);
            this._collections.set(key, collection);
            return collection;
        }
    }
}
exports.EntityStorage = EntityStorage;
//# sourceMappingURL=entity.storage.js.map