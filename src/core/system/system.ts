import { EntitiesCollection, SystemEntitiesCollection } from '../collections';
import { IComponentFilter, ComponentType } from '../component';
import { Entity } from '../entity';
import {
  Excludes,
  Includes,
  WithDisabled,
} from './decorators/system.decorators';

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
@Includes()
@Excludes()
@WithDisabled(false)
export abstract class System<TEntity extends Entity> {
  // public includes: ComponentType<any>[] = [];
  // public excludes: ComponentType<any>[] = [];
  // public withDisabled: boolean = false;

  public get filter(): IComponentFilter {
    return {
      includes: (this as any).includes,
      excludes: (this as any).excludes,
      withDisabled: (this as any).withDisabled,
    };
  }

  public async execute(
    entities: EntitiesCollection,
    decorator?: IComponentFilter
  ): Promise<void> {
    const filter = decorator
      ? this.setupFilterDecorator(decorator)
      : this.filter;
    const filtered = entities.get(filter) as SystemEntitiesCollection<TEntity>;

    await this.onExecute(filtered);
  }

  protected abstract onExecute(
    entities: SystemEntitiesCollection<TEntity>
  ): void;

  private setupFilterDecorator(decorator: IComponentFilter): IComponentFilter {
    let { includes, excludes, withDisabled } = this as any;

    includes = [...includes, ...(decorator.includes || [])];
    excludes = [...excludes, ...(decorator.excludes || [])];

    if (Object.hasOwn(decorator, 'withDisabled')) {
      withDisabled = decorator.withDisabled as boolean;
    }

    return { includes, excludes, withDisabled };
  }
}
