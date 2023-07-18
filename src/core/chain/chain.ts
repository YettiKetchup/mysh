import { EntitiesCollection } from "../collections";
import { IChainLink } from "./data/interfaces";

export class Chain {
  private _links: IChainLink[] = [];

  public get links(): IChainLink[] {
    return this._links;
  }

  constructor(private _entities: EntitiesCollection) {}

  public add(part: IChainLink) {
    this._links.push(part);
  }

  public async execute(): Promise<void> {
    for (const item of this._links) {
      await this.executeItem(item);
    }
  }

  private async executeItem(part: IChainLink): Promise<void> {
    const { system, includes, excludes, withDisabled } = part;
    const decorator = { includes, excludes, withDisabled };

    await system.execute(this._entities, decorator);
  }
}
