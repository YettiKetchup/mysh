import { Component, IComponentFilter, ComponentType, ObservableComponent } from '../component';
import { ObservableEntity } from './observable.entity';
export declare class Entity {
    get visible(): boolean;
    set visible(value: boolean);
    get components(): Component[];
    private _visible;
    private _collection;
    add(component: Component, unshift?: boolean): void;
    get<T extends Component>(type: ComponentType<T>, isObservable?: boolean): T | ObservableComponent<T>;
    remove<T extends Component>(type: ComponentType<T>): T;
    has(types: ComponentType<any>[]): boolean;
    isSatisfiedFilter(filter: IComponentFilter): boolean;
    observable(): ObservableEntity;
    private createObservableComponent;
}
