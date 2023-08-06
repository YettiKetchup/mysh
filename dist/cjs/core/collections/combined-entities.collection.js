"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CombinedEntitiesCollection = void 0;
const entities_collection_1 = require("./entities.collection");
class CombinedEntitiesCollection extends entities_collection_1.EntitiesCollection {
    get entities() {
        const groupedEntities = this._colelctions.map((collection) => collection.entities);
        const empty = [];
        const entities = empty.concat(...groupedEntities);
        return [...this._entities, ...entities];
    }
    constructor(_colelctions) {
        super();
        this._colelctions = _colelctions;
    }
}
exports.CombinedEntitiesCollection = CombinedEntitiesCollection;
//# sourceMappingURL=combined-entities.collection.js.map