"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Executor = void 0;
const executor_type_enum_1 = require("./data/executor-type.enum");
class Executor {
    constructor() {
        this._chainBuilder = null;
        this._type = executor_type_enum_1.ExecutorType.INIT;
    }
    execute(collection) {
        const chain = this._chainBuilder?.build();
        chain?.execute(collection);
    }
}
exports.Executor = Executor;
//# sourceMappingURL=executor.js.map