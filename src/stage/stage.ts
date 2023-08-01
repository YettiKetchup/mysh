import { IModule } from '../core/module';
import { IStage } from './data/interfaces';
import { ModuleConstructor } from './data/types';
import { Modules } from './decorators/stage.decorators';

@Modules()
export abstract class Stage implements IStage {
  private _createdModules: IModule[] = [];

  public init(): void {
    const { modules } = this as unknown as Stage & {
      modules: ModuleConstructor[];
    };

    this._createdModules = modules.map((module) => {
      const createdModule = new module();
      createdModule.init();
      return createdModule;
    });
  }

  public update(dt: number): void {
    const { length } = this._createdModules;

    /**
     * Use for loop instead of forEach because for loop is faster.
     *  What is critical when updating.
     */
    for (let i = 0; i < length; i++) {
      this._createdModules[i].update(dt);
    }
  }

  public destroy(): void {
    this._createdModules.forEach((module) => module.destroy());
  }

  public abstract preload(): Promise<void>;
}
