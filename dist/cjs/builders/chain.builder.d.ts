import { EntitiesCollection } from "../core/collections";
import { ComponentType } from "../core/component";
import { System } from "../core/system";
import { Chain } from "../core/chain";
import { IChainBuilder } from "./data/interfaces";
export declare class ChainBuilder implements IChainBuilder {
    private _entities;
    protected _chain: Chain;
    private get _cerrunt();
    constructor(_entities: EntitiesCollection);
    withSystem(system: System<any>): ChainBuilder;
    withIncludes(...components: ComponentType<any>[]): ChainBuilder;
    withExcludes(...components: ComponentType<any>[]): ChainBuilder;
    withDisabled(withDisabled: boolean): ChainBuilder;
    build(): Chain;
}
