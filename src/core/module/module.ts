import { IModule } from './data/interfaces';

export abstract class Module implements IModule {
  public preInit(): void {}

  public init(): void {}

  public postInit(): void {}

  public update(dt: number): void {}

  public postUpdate(): void {}

  public destroy(): void {}
}
