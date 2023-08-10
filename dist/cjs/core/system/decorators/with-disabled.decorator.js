"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithDisabled = void 0;
function WithDisabled(withDisabled) {
    return function (constructor) {
        constructor.prototype.withDisabled = withDisabled;
    };
}
exports.WithDisabled = WithDisabled;
//# sourceMappingURL=with-disabled.decorator.js.map