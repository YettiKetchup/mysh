"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modules = void 0;
function Modules(...modules) {
    return function (constructor) {
        constructor.prototype.modules = modules;
    };
}
exports.Modules = Modules;
//# sourceMappingURL=stage.decorators.js.map