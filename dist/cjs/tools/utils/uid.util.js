"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uid = void 0;
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2);
exports.uid = uid;
//# sourceMappingURL=uid.util.js.map