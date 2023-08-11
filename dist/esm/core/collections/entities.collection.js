import { Filtered } from './filtered.collection';
export class EntitiesCollection {
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
        return new Filtered(result);
    }
}
//# sourceMappingURL=entities.collection.js.map