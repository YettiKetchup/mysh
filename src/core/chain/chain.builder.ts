import { ComponentType } from '../component';
import { System, SystemConstructor, SystemsCaching } from '../system';
import { Chain } from '.';
import { SystemData } from './data/types';

export class ChainBuilder {
  protected _chain: Chain = new Chain();

  private get _current(): number {
    return this._chain.links.length - 1;
  }

  public withSystem<T extends System<any>, K extends keyof T>(
    systemConstructor: SystemConstructor<T>,
    data?: SystemData<T, K>
  ): ChainBuilder {
    const system = SystemsCaching.create(systemConstructor);

    if (data) this.addData(system, data);

    this._chain.add({
      system: system,
    });
    return this;
  }

  public withIncludes(...components: ComponentType<any>[]): ChainBuilder {
    this._chain.links[this._current].includes = components;
    return this;
  }

  public withExcludes(...components: ComponentType<any>[]): ChainBuilder {
    this._chain.links[this._current].excludes = components;
    return this;
  }

  public withDisabled(withDisabled: boolean): ChainBuilder {
    this._chain.links[this._current].withDisabled = withDisabled;
    return this;
  }

  public withDelay(delay: number): ChainBuilder {
    this._chain.links[this._current].delay = delay;
    return this;
  }

  public build(): Chain {
    return this._chain;
  }

  private addData(system: System<any>, data: SystemData<any, any>): void {
    for (let key in data) {
      Object.defineProperty(system, key, {
        value: data[key],
        writable: false,
      });
    }
  }
}
