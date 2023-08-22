import { EntitiesCollection } from '../collections';
import { ObservableEntity } from './observable.entity';
import { Component, IComponentFilter, ComponentType, ObservableComponent } from '../component';
export declare class Entity {
    get id(): string;
    get visible(): boolean;
    set visible(value: boolean);
    get components(): Component[];
    get collection(): EntitiesCollection;
    set collection(value: EntitiesCollection);
    private _id;
    private _visible;
    private _components;
    private _entityCollection;
    private _observable;
    onInit(): void;
    onDestroy(): void;
    add(component: Component): void;
    get<T extends Component>(type: ComponentType<T>, isObservable?: boolean): T | ObservableComponent<T>;
    remove<T extends Component>(type: ComponentType<T>): T;
    has(types: ComponentType<any>[]): boolean;
    isSatisfiedFilter(filter: IComponentFilter): boolean;
    observable(): ObservableEntity;
    destroy(): void;
    private createObservableComponent;
}
