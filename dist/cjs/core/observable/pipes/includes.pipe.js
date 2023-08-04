"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.includesPipe = void 0;
function includesPipe(...types) {
    return (entity) => entity.has(types);
}
exports.includesPipe = includesPipe;
//# sourceMappingURL=includes.pipe.js.map