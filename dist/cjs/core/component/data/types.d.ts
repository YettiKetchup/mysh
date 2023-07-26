import { PureObject } from '../../../data/types';
import { IObservableComponent } from './interfaces';
/**
 * A component can be any object, but not an array or a function.
 * You must use typed objects created through the constructor.
 * But you don't need to inherit from anything
 * for Mysh to understand that it's a Component.
 *
 * A component is not a functional unit, it stores only data, but not logic.
 *
 * There are exceptions where logic can be stored in a Component,
 * but this applies to Components provided by engines (such as CocosCreator)
 * that Mysh is used with.
 *
 * Components may not contain data, acting as tags.
 *
 * @example
 *
 * // Component with data
 * class HealthComponent {
 *  public value: number = 100;
 *
 *  constructor(value: number) {
 *    this.value = value;
 *  }
 * }
 *
 * // Components without data acting as tags,
 * // which is also valid.
 * class PlayerComponent {}
 *
 * const health = new HealthComponent(100);
 * const player = new PlayerComponent();
 *
 * const entity player = new Entity("Player", [health, player]);
 * }
 */
export type Component = PureObject;
/**
 * The type of the object's constructor.
 * Used to filter and search for components.
 *
 * @example
 * const health = entity.get(HealthComponent);
 */
export type ComponentType<T extends Component> = new (...args: any[]) => T;
/**
 * The wrapper type of the observable component.
 * Contains the same fields as the original object.
 */
export type ObservableComponent<T extends Component> = IObservableComponent & T;
