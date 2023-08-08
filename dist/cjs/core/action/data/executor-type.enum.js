"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExecutorType = void 0;
var ExecutorType;
(function (ExecutorType) {
    ExecutorType[ExecutorType["INIT"] = 0] = "INIT";
    ExecutorType[ExecutorType["POST_INIT"] = 1] = "POST_INIT";
    ExecutorType[ExecutorType["UPDATE"] = 2] = "UPDATE";
    ExecutorType[ExecutorType["POST_UPDATE"] = 3] = "POST_UPDATE";
    ExecutorType[ExecutorType["DESTROY"] = 4] = "DESTROY";
})(ExecutorType || (exports.ExecutorType = ExecutorType = {}));
//# sourceMappingURL=executor-type.enum.js.map