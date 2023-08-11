import { Component, ComponentType } from '../component';
export declare class ComponentsCollection {
    get items(): Component[];
    get count(): number;
    private _components;
    add(component: Component): void;
    get<T extends Component>(type: ComponentType<T>): T | null;
    remove<T extends Component>(type: ComponentType<T>): T | null;
    has<T extends Component>(type: ComponentType<T>): boolean;
}
