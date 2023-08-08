import { ExecutorType } from './data/executor-type.enum';
export class Executor {
    constructor() {
        this._chainBuilder = null;
        this._type = ExecutorType.INIT;
    }
    execute(collection) {
        const chain = this._chainBuilder?.build();
        chain?.execute(collection);
    }
}
//# sourceMappingURL=executor.js.map