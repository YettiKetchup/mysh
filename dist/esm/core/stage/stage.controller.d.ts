import { IStage } from './data/interfaces';
import { StageConstructor } from './data/types';
export declare class StageController {
    private static _stages;
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
    static register(stage: IStage): void;
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
    static load(stageType: StageConstructor): Promise<void>;
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
    static update(dt: number): void;
}
