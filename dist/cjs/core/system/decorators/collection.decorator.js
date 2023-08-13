"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collection = void 0;
const utils_1 = require("../../../tools/utils");
const storage_1 = require("../../storage");
function Collection(keys) {
    return function (constructor) {
        const collection = storage_1.EntityStorage.combine((0, utils_1.uid)(), keys);
        constructor.prototype.redefinedCollection = collection;
    };
}
exports.Collection = Collection;
//# sourceMappingURL=collection.decorator.js.map