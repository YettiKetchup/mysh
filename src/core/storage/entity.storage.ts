import { EntitiesCollection } from '../collections';
import { CombinedEntitiesCollection } from '../collections/combined-entities.collection';

export class EntityStorage {
  private static _collections: Map<string, EntitiesCollection> = new Map();

  public static get(key: string): EntitiesCollection {
    let collection = this._collections.get(key) as EntitiesCollection;
    if (!collection) collection = this.create(key);

    return collection;
  }

  public static create(key: string): EntitiesCollection {
    if (this._collections.has(key)) {
      return this.get(key) as EntitiesCollection;
    }

    const collection = new EntitiesCollection();
    this._collections.set(key, collection);
    return collection;
  }

  public static destroy(key: string): void {
    this._collections.delete(key);
  }

  public static clearAll(): void {
    this._collections = new Map();
  }

  public static combine(
    key: string,
    storageKeys: string[]
  ): EntitiesCollection {
    const collections = storageKeys.map((key) => this.get(key));
    const collection = new CombinedEntitiesCollection(collections);

    this._collections.set(key, collection);

    return collection;
  }
}
