export class StageController {
    static { this._stages = []; }
    static register(stage) {
        this._stages.push(stage);
    }
    static async load(stageType) {
        const stage = this._stages.find((s) => s instanceof stageType);
        await stage?.preload();
        this.current?.destroy();
        this.current = stage;
        this.current?.init();
    }
    static update(dt) {
        this.current?.update(dt);
    }
}
//# sourceMappingURL=stage.controller.js.map