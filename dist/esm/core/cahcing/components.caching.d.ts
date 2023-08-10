import { Component, ComponentType } from '../component';
import { Entity } from '../entity';
export declare class ComponentsCaching {
    private static _cached;
    static cache<T extends Component>(entity: Entity, componentType: ComponentType<T>, isObservable?: boolean): void;
    static from<T extends Component>(entity: Entity, componentType: ComponentType<T>, isObservable?: boolean): T | null;
    static has<T extends Component>(entity: Entity, componentType: ComponentType<T>): boolean;
    static clear(entity: Entity): void;
    private static getMethod;
    private static find;
}
