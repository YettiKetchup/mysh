"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Includes = void 0;
function Includes(...includes) {
    return function (constructor) {
        constructor.prototype.includes = includes;
    };
}
exports.Includes = Includes;
//# sourceMappingURL=includes.decorator.js.map