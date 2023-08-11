"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntitiesCollection = void 0;
const filtered_collection_1 = require("./filtered.collection");
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
        entities.forEach((entity) => {
            entity.collection = this;
            entity.onInit();
        });
    }
    destroy(entity) {
        this._entities = this._entities.filter((e) => e.id !== entity.id);
        entity.onDestroy();
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
        return new filtered_collection_1.Filtered(result);
    }
}
exports.EntitiesCollection = EntitiesCollection;
//# sourceMappingURL=entities.collection.js.map