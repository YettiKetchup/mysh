import { Chain } from '../../core/chain';
import { ComponentType } from '../../core/component';
import { System } from '../../core/system';

export interface IChainBuilder {
  withSystem(system: System<any>): IChainBuilder;
  withIncludes(...components: ComponentType<any>[]): IChainBuilder;
  withExcludes(...components: ComponentType<any>[]): IChainBuilder;
  withDisabled(withDisabled: boolean): IChainBuilder;
  build(): Chain;
}
