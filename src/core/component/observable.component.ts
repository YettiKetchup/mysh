import { Entity } from '../entity';
import { EntitySubject, ObserverType } from '../observable';
import { IObservableComponent } from './data/interfaces';
import { Component } from './data/types';

/**
 * A wrapper around a Component that makes it observable.
 * On initialization, creates accessors for each field of the source object.
 * When changing or getting data through accessors,
 * it changes and returns the data of the original object,
 * and also fires the ObserverType.CHANGED event.
 *
 * !!!IMPORTANT!!!
 * Do not instantiate this Class in your code.
 * Use the entity.get(Component, isObservable) method,
 * which will return an instance of this class if the isObservable flag is true.
 */
export class ObservableComponentWrapper<TComponent extends Component>
  implements IObservableComponent
{
  constructor(entity: Entity, component: TComponent) {
    this.setAcessors(entity, component);
  }

  private setAcessors(entity: Entity, component: TComponent) {
    for (let key in component) {
      Object.defineProperty(this, key, {
        get: () => component[key],
        set: (value) => {
          component[key] = value;
          this.notify(entity, component);
        },
      });
    }
  }

  private notify(entity: Entity, component: TComponent): void {
    const event = ObserverType.CHANGED;
    const componentType = component.constructor;

    EntitySubject.notify(event, entity, componentType);
  }
}
