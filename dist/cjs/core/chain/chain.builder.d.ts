import { ComponentType } from '../component';
import { System, SystemConstructor } from '../system';
import { Chain } from '.';
import { SystemData } from './data/types';
export declare class ChainBuilder {
    protected _chain: Chain;
    private get _current();
    withSystem<T extends System<any>, K extends keyof T>(systemConstructor: SystemConstructor<T>, data?: SystemData<T, K>): ChainBuilder;
    withIncludes(...components: ComponentType<any>[]): ChainBuilder;
    withExcludes(...components: ComponentType<any>[]): ChainBuilder;
    withDisabled(withDisabled: boolean): ChainBuilder;
    withDelay(delay: number): ChainBuilder;
    build(): Chain;
    private addData;
}
