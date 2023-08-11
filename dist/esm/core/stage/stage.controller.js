export class StageController {
    static { this._stages = []; }
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
    static register(stage) {
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
    static async load(stageType) {
        const stage = this._stages.find((s) => s instanceof stageType);
        await stage?.preload();
        this.current?.destroy();
        this.current = stage;
        this.current?.preInit();
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
    static update(dt) {
        this.current?.update(dt);
        this.current?.postUpdate();
    }
}
//# sourceMappingURL=stage.controller.js.map