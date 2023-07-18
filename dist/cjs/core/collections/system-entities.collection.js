"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemEntitiesCollection = void 0;
/**
 * A special collection object that stores Entities
 * and allows you to apply some logic to them through cycles.
 *
 * Allows you to execute both synchronous and asynchronous code.
 */
class SystemEntitiesCollection {
    get count() {
        return this._entities.length;
    }
    constructor(_entities) {
        this._entities = _entities;
    }
    /**
     * Sequentially executes the passed callback with
     * synchronous code for each entity
     *
     * @param callback
     * A callback that will be called on each iteration
     * for each stored Entity.
     *
     * @example
     * entities.loop((entity: Entity, index?: number) => {
     *  // ... do something.
     * });
     */
    loop(callback) {
        for (let i = 0; i < this._entities.length; i++) {
            callback(this._entities[i], i);
        }
    }
    /**
     * Sequentially executes the passed callback with
     * asynchronous code for each entity
     *
     * @param callback
     * A callback that will be called on each iteration
     * for each stored Entity.
     *
     * @example
     * await entities.sequential(async (entity: Entity, index?: number) => {
     *  const animation = entity.get(AnimationComponent);
     *  await animation.play(); // The iteration will end only after executing this code.
     * });
     */
    async sequential(callback) {
        let index = 0;
        for (const entity of this._entities) {
            await callback(entity, index);
            index += 1;
        }
    }
    /**
     * Executes the passed callback with
     * asynchronous code in parallel for each entity
     *
     * @param callback
     * A callback that will be called on each iteration
     * for each stored Entity.
     *
     * @example
     * await entities.parallel(async (entity: Entity, index?: number) => {
     *  const animation = entity.get(AnimationComponent);
     *  await animation.play(); // The iteration will complete without waiting for this code to execute.
     * });
     */
    async parallel(callback) {
        const promises = this._entities.map(callback);
        await Promise.all(promises);
    }
}
exports.SystemEntitiesCollection = SystemEntitiesCollection;
//# sourceMappingURL=system-entities.collection.js.map