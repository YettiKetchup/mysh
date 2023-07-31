import { Entity } from '../entity';
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
export declare class ObservableComponentWrapper<TComponent extends Component> implements IObservableComponent {
    constructor(entity: Entity, component: TComponent);
    private setAcessors;
    private notify;
}
