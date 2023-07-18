import { EntitiesCollection } from "../core/collections";
import { ComponentType } from "../core/component";
import { System } from "../core/system";
import { Chain } from "../core/chain";
import { IChainBuilder } from "./data/interfaces";

export class ChainBuilder implements IChainBuilder {
  protected _chain: Chain = new Chain(this._entities);

  private get _cerrunt(): number {
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
    this._chain.links[this._cerrunt].includes = components;
    return this;
  }

  public withExcludes(...components: ComponentType<any>[]): ChainBuilder {
    this._chain.links[this._cerrunt].excludes = components;
    return this;
  }

  public withDisabled(withDisabled: boolean): ChainBuilder {
    this._chain.links[this._cerrunt].withDisabled = withDisabled;
    return this;
  }

  public build(): Chain {
    return this._chain;
  }
}
