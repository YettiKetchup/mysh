import { EntitiesCollection } from "../collections";

export abstract class Module {
  constructor(protected entities: EntitiesCollection) {}

  public init(): void {}

  public update(deltaTime?: number): void {}

  public destroy(): void {}
}
