"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnResize = void 0;
const cahcing_1 = require("../../cahcing");
const storage_1 = require("../../storage");
let mainKey = '';
const systems = [];
new ResizeObserver(() => {
    const collection = storage_1.EntityStorage.get(mainKey);
    systems.forEach((system) => system.execute(collection, {}));
}).observe(document.body);
function OnResize(key) {
    return function (constructor) {
        const system = cahcing_1.SystemsCaching.create(constructor);
        systems.push(system);
        mainKey = key;
    };
}
exports.OnResize = OnResize;
//# sourceMappingURL=on-resize.decorator.js.map