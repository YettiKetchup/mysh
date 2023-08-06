import { EntitiesCollection } from './entities.collection';
export class CombinedEntitiesCollection extends EntitiesCollection {
    constructor(_colelctions) {
        super();
        this._colelctions = _colelctions;
    }
    add(...entities) {
        this._entities = this.getCombinedEntities();
        super.add(...entities);
    }
    destroy(entity) {
        const collection = this._colelctions.find((collection) => collection.entities.find((e) => e.id === entity.id));
        if (collection) {
            collection.destroy(entity);
            this._entities = this._entities.filter((e) => e.id !== entity.id);
            this._entities = this.getCombinedEntities();
        }
        else {
            super.destroy(entity);
            this._entities = this.getCombinedEntities();
        }
    }
    get(filter) {
        this._entities = this.getCombinedEntities();
        return super.get(filter);
    }
    getCombinedEntities() {
        const unique = new Set([...this.entities, ...this.combineEntities()]);
        return [...unique];
    }
    combineEntities() {
        const groupedEntities = this._colelctions.map((collection) => collection.entities);
        const empty = [];
        return empty.concat(...groupedEntities);
    }
}
//# sourceMappingURL=combined-entities.collection.js.map