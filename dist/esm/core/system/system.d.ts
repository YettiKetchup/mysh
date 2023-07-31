import { EntitiesCollection, SystemEntitiesCollection } from '../collections';
import { IComponentFilter } from '../component';
import { Entity } from '../entity';
/**
 * The system is a class in which all work with the data
 * of the Entity Components takes place.
 *
 * The system gets to work all the Entities whose Components
 * are specified in the Includes(...Components)
 * and Excludes(...Components) class decorators.
 * Entities are not transferred directly to the System,
 * the System always requests the necessary Entities
 * through filtering objects.
 *
 * The system may be asynchronous.
 * But keep in mind that all asynchronous Systems
 * will be executed by the Chain at the same order
 * as they were installed.
 *
 * @example
 *
 * // Synchronous System
 * class HealingSystem extends System<Entity> {
 *   execute(entities: SystemEntitiesCollection<Entity>): void {
 *     entities.loop(entity => {
 *       const health = entity.get(HealthComponent);
 *       const healer = entity.get(HealerComponent);
 *
 *       health.value += healer.value;
 *     });
 *   }
 * }
 *
 * // Asynchronous System
 * class DelaySystem extends System<Entity> {
 *   // This system does not specify the Components that the Entity
 *   // should have using the Includes(...Components) decorator,
 *   // so the System will not receive any Entities. However,
 *   // the execute() method will still be executed.
 *   async execute(entities: SystemEntitiesCollection<Entity>): Promise<void> {
 *     await sleep(2000);
 *   }
 * }
 */
export declare abstract class System<TEntity extends Entity> {
    private _entityCollection;
    protected get collection(): EntitiesCollection;
    get filter(): IComponentFilter;
    execute(entities: EntitiesCollection, decorator?: IComponentFilter): Promise<void>;
    protected abstract onExecute(entities: SystemEntitiesCollection<TEntity>): void;
    private setupFilterDecorator;
}
