"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.excludes = void 0;
function excludes(...types) {
    return (entity) => !entity.has(types);
}
exports.excludes = excludes;
//# sourceMappingURL=excludes.pipe.js.map