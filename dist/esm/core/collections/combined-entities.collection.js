import { EntitiesCollection } from './entities.collection';
export class CombinedEntitiesCollection extends EntitiesCollection {
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
//# sourceMappingURL=combined-entities.collection.js.map