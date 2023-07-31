import { EntitiesCollection } from '../collections';
import { ComponentType } from '../component';
import { System } from '../system';
import { Chain } from '.';

export class ChainBuilder {
  protected _chain: Chain = new Chain(this._entities);

  private get _current(): number {
    return this._chain.links.length - 1;
  }

  constructor(private _entities: EntitiesCollection) {}

  public withSystem(system: System<any>): ChainBuilder {
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

  public build(): Chain {
    return this._chain;
  }
}
