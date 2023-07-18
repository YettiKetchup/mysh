import { Component, IComponentFilter, ComponentType, ObservableComponent } from "../../component";
import { ObservableEntity } from "../observable.entity";
export interface IEntity {
    visible: boolean;
    components: Component[];
    add(component: Component): void;
    get<T extends Component>(type: ComponentType<T>, isObservable: boolean): T | ObservableComponent<T>;
    remove<T extends Component>(type: ComponentType<T>): T;
    has(types: ComponentType<any>[]): boolean;
    isSatisfiedFilter(filter: IComponentFilter): boolean;
    observable(): ObservableEntity;
}
