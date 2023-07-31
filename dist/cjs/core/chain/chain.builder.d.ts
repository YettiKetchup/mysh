import { EntitiesCollection } from '../collections';
import { ComponentType } from '../component';
import { System } from '../system';
import { Chain } from '.';
export declare class ChainBuilder {
    private _entities;
    protected _chain: Chain;
    private get _current();
    constructor(_entities: EntitiesCollection);
    withSystem(system: System<any>): ChainBuilder;
    withIncludes(...components: ComponentType<any>[]): ChainBuilder;
    withExcludes(...components: ComponentType<any>[]): ChainBuilder;
    withDisabled(withDisabled: boolean): ChainBuilder;
    withDelay(delay: number): ChainBuilder;
    build(): Chain;
}
