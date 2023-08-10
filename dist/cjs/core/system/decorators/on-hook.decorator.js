"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnHook = void 0;
const distributor_1 = require("../../distributor");
function OnHook(hook) {
    return function (constructor) {
        distributor_1.LifecycleSystemDistributor.add(constructor, hook);
    };
}
exports.OnHook = OnHook;
//# sourceMappingURL=on-hook.decorator.js.map