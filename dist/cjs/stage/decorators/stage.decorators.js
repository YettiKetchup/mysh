"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modules = void 0;
function Modules(...moduleTypes) {
    return function (constructor) {
        constructor.prototype.modules = moduleTypes;
    };
}
exports.Modules = Modules;
//# sourceMappingURL=stage.decorators.js.map