import { EntitiesCollection } from "../core/collections";

export class EntityStorage {
  private _collections: Map<string, EntitiesCollection> = new Map();

  public get(key: string): EntitiesCollection {
    try {
      return this._collections.get(key) as EntitiesCollection;
    } catch (e) {
      throw new Error(`Collection ${key} didn't exist!`);
    }
  }

  public create(key: string): EntitiesCollection {
    if (this._collections.has(key)) {
      return this.get(key) as EntitiesCollection;
    }

    const collection = new EntitiesCollection();
    this._collections.set(key, collection);
    return collection;
  }

  public destroy(key: string): void {
    this._collections.delete(key);
  }

  public clearAll(): void {
    this._collections = new Map();
  }

  public combine(
    key: string,
    storages: EntitiesCollection[]
  ): EntitiesCollection {
    const newCollection = this.create(key);

    storages.forEach((collection: EntitiesCollection) => {
      newCollection.add(...collection.entities);
    });

    return newCollection;
  }
}
