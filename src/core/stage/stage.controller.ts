import { IStage } from './data/interfaces';
import { StageConstructor } from './data/types';

export class StageController {
  private static _stages: IStage[] = [];
  protected static current: IStage | undefined;

  /**
   * Registering Stages for later calling.
   *
   * @param stage Stage instance.
   *
   * @example
   * StageController.register(new GameScene());
   * // ... later in the code
   * StageController.load(GameScene);
   */
  public static register(stage: IStage): void {
    this._stages.push(stage);
  }

  /**
   * Loading the game scene.
   * The game scene must be registered before being
   * called in the register(stage) method.
   *
   * @param stageType Type of Stage.
   *
   * @example
   * StageController.register(new GameScene());
   * // ... later in the code
   * StageController.load(GameScene);
   */
  public static async load(stageType: StageConstructor): Promise<void> {
    const stage = this._stages.find((s) => s instanceof stageType);

    await stage?.preload();
    this.current?.destroy();
    this.current = stage;
    this.current?.init();
    this.current?.postInit();
  }

  /**
   * Updates all scenes and their modules.
   * @param dt - time between frames.
   *
   * @example
   * // Some ticker in your app
   * Ticker.add((dt) => {
   *  StageController.update(dt);
   * });
   */
  public static update(dt: number): void {
    this.current?.update(dt);
    this.current?.postUpdate();
  }
}
