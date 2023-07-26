import { ComponentsCollection } from '../collections';
import { Component, IComponentFilter, ComponentType, ObservableComponent } from '../component';
import { MixinConstructor } from './data/types';
import { ObservableEntity } from './observable.entity';
export declare function MixinEntity<T extends MixinConstructor>(Mixin: T): {
    new (...args: any[]): {
        [x: string]: any;
        visible: boolean;
        readonly components: import("../../data/types").PureObject[];
        _visible: boolean;
        _collection: ComponentsCollection;
        add(component: Component): void;
        get<T extends import("../../data/types").PureObject>(type: ComponentType<T>, isObservable?: boolean): T | ObservableComponent<T>;
        remove<T_1 extends import("../../data/types").PureObject>(type: ComponentType<T_1>): T_1;
        has(types: ComponentType<any>[]): boolean;
        isSatisfiedFilter(filter: IComponentFilter): boolean;
        observable(): ObservableEntity;
        createObservableComponent<T_2 extends import("../../data/types").PureObject>(component: T_2): ObservableComponent<T_2>;
    };
} & T;
