"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntitiesCollection = void 0;
const system_entities_collection_1 = require("./system-entities.collection");
class EntitiesCollection {
    constructor() {
        this._entities = [];
    }
    get entities() {
        return this._entities;
    }
    get count() {
        return this._entities.length;
    }
    add(...entities) {
        this._entities.push(...entities);
    }
    remove(entity) {
        // this._entities = this._entities.filter((e) => e.id !== entity.id);
    }
    get(filter) {
        let result = [];
        let index = 0;
        let entity = this._entities[index];
        while (entity) {
            const isActive = entity.visible;
            const isSatisfied = entity.isSatisfiedFilter(filter);
            const condition = filter.withDisabled
                ? isSatisfied
                : isSatisfied && isActive;
            if (condition)
                result.push(entity);
            index += 1;
            entity = this._entities[index];
        }
        return new system_entities_collection_1.SystemEntitiesCollection(result);
    }
}
exports.EntitiesCollection = EntitiesCollection;
//# sourceMappingURL=entities.collection.js.map