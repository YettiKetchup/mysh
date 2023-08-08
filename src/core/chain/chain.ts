import { sleep } from '../../tools/utils';
import { EntitiesCollection } from '../collections';
import { IChainLink } from './data/interfaces';

export class Chain {
  private _links: IChainLink[] = [];

  public get links(): IChainLink[] {
    return this._links;
  }

  public add(link: IChainLink) {
    this._links.push(link);
  }

  public async execute(entities: EntitiesCollection): Promise<void> {
    for (const link of this._links) {
      await this.executeItem(link, entities);
    }
  }

  public async destroy(): Promise<void> {
    for (const link of this._links) {
      await link.system.destroy();
    }
  }

  private async executeItem(
    link: IChainLink,
    entities: EntitiesCollection
  ): Promise<void> {
    const { system, includes, excludes, withDisabled } = link;
    const decorator = { includes, excludes, withDisabled };

    if (link.delay) {
      await sleep(link.delay);
    }

    await system.execute(entities, decorator);
  }
}
