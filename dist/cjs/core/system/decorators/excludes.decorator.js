"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Excludes = void 0;
function Excludes(...excludes) {
    return function (constructor) {
        constructor.prototype.excludes = excludes;
    };
}
exports.Excludes = Excludes;
//# sourceMappingURL=excludes.decorator.js.map