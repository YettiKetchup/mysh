import { Chain } from "../../core/chain";
import { Component, ComponentType } from "../../core/component";
import { MixedEntity } from "../../core/entity";
import { System } from "../../core/system";
export interface IChainBuilder {
    withSystem(system: System<any>): IChainBuilder;
    withIncludes(...components: ComponentType<any>[]): IChainBuilder;
    withExcludes(...components: ComponentType<any>[]): IChainBuilder;
    withDisabled(withDisabled: boolean): IChainBuilder;
    build(): Chain;
}
export interface IEntityBuilder<T> {
    withComponent(component: Component): IEntityBuilder<T>;
    isVisible(): IEntityBuilder<T>;
    build(): MixedEntity<T>;
}
