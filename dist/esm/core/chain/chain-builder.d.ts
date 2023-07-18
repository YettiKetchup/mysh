import { EntitiesCollection } from "../collections";
import { ComponentType } from "../component";
import { System } from "../system";
import { Chain } from "./chain";
export declare class ChainBuilder {
    private _entities;
    private _chain;
    private get _cerrunt();
    constructor(_entities: EntitiesCollection);
    withSystem(system: System<any>): ChainBuilder;
    withIncludes(...components: ComponentType<any>[]): ChainBuilder;
    withExcludes(...components: ComponentType<any>[]): ChainBuilder;
    withDisabled(withDisabled: boolean): ChainBuilder;
    build(): Chain;
}
