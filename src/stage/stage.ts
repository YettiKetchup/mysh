import { IModule } from '../core/module';
import { IStage } from './data/interfaces';
import { Modules } from './decorators/stage.decorators';

@Modules()
export abstract class Stage implements IStage {
  public init(): void {
    const modules = this.getModules();

    modules.forEach((module) => {
      module.init();
    });
  }

  public update(dt: number): void {
    const modules = this.getModules();
    const { length } = modules;

    /**
     * Use for loop instead of forEach because for loop is faster.
     *  What is critical when updating.
     */
    for (let i = 0; i < length; i++) {
      modules[i].update(dt);
    }
  }

  public destroy(): void {
    const modules = this.getModules();
    modules.forEach((module) => module.destroy());
  }

  /**
   * Use to preload assets or data.
   *
   * @example
   * public async preload(): Promise<void> {
   *  const data = await fetch(api);
   *  // ...do something.
   * }
   */
  public abstract preload(): Promise<void>;

  private getModules(): IModule[] {
    const { modules } = this as unknown as Stage & {
      modules: IModule[];
    };

    return modules || [];
  }
}
