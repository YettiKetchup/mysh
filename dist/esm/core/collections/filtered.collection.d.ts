import { Entity } from '../entity';
import { EntityIterationCallback } from './data/types';
/**
 * A special collection object that stores Entities
 * and allows you to apply some logic to them through cycles.
 *
 * Allows you to execute both synchronous and asynchronous code.
 */
export declare class Filtered<TEntity extends Entity = Entity> {
    private _entities;
    get count(): number;
    get list(): TEntity[];
    constructor(_entities: TEntity[]);
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
    loop(callback: EntityIterationCallback<Entity>): void;
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
    sequential(callback: EntityIterationCallback<TEntity>): Promise<void>;
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
    parallel(callback: EntityIterationCallback<TEntity>): Promise<void>;
}
