import { IStage } from './data/interfaces';
import { StageConstructor } from './data/types';

export class StageController {
  private static _stages: IStage[] = [];
  protected static current: IStage | undefined;

  public static register(stage: IStage): void {
    this._stages.push(stage);
  }

  public static async load(stageType: StageConstructor): Promise<void> {
    const stage = this._stages.find((s) => s instanceof stageType);

    await stage?.preload();
    this.current?.destroy();
    this.current = stage;
    this.current?.init();
  }

  public static update(dt: number): void {
    this.current?.update(dt);
  }
}
