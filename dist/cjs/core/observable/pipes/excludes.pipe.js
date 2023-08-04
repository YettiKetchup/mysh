"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.excludesPipe = void 0;
function excludesPipe(...types) {
    return (entity) => !entity.has(types);
}
exports.excludesPipe = excludesPipe;
//# sourceMappingURL=excludes.pipe.js.map