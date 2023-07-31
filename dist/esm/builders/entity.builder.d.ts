import { Component } from "../core/component";
import { EntityConstructor, MixedEntity } from "../core/entity";
import { IEntityBuilder } from "./data/interfaces";
export declare class EntityBuilder<T> implements IEntityBuilder<T> {
    protected _entity: MixedEntity<T> | null;
    private get _currentEntity();
    constructor(Entity: EntityConstructor<T>);
    withComponent(component: Component): IEntityBuilder<T>;
    isVisible(): IEntityBuilder<T>;
    build(): MixedEntity<T>;
}
