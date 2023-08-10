"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnResize = void 0;
const cahcing_1 = require("../../cahcing");
const storage_1 = require("../../storage");
function OnResize(key) {
    return function (constructor) {
        const system = cahcing_1.SystemsCaching.create(constructor);
        const collection = storage_1.EntityStorage.get(key);
        new ResizeObserver(() => {
            system.execute(collection, {});
        }).observe(document.body);
    };
}
exports.OnResize = OnResize;
//# sourceMappingURL=on-resize.decorator.js.map