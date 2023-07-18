import { Component } from "../../component";
import { MixedEntity } from "../../entity";
export interface IEntityBuilder<T> {
    withComponent(component: Component): IEntityBuilder<T>;
    isVisible(): IEntityBuilder<T>;
    build(): MixedEntity<T>;
}
