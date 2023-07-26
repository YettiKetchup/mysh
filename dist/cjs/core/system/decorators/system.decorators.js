"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithDisabled = exports.Excludes = exports.Includes = void 0;
function Includes(...includes) {
    return function (constructor) {
        constructor.prototype.includes = includes;
    };
}
exports.Includes = Includes;
function Excludes(...excludes) {
    return function (constructor) {
        constructor.prototype.excludes = excludes;
    };
}
exports.Excludes = Excludes;
function WithDisabled(withDisabled) {
    return function (constructor) {
        constructor.prototype.withDisabled = withDisabled;
    };
}
exports.WithDisabled = WithDisabled;
//# sourceMappingURL=system.decorators.js.map