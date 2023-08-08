"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemsCaching = exports.System = void 0;
__exportStar(require("./decorators/system.decorators"), exports);
__exportStar(require("./data/types"), exports);
var system_1 = require("./system");
Object.defineProperty(exports, "System", { enumerable: true, get: function () { return system_1.System; } });
var systems_caching_1 = require("./systems.caching");
Object.defineProperty(exports, "SystemsCaching", { enumerable: true, get: function () { return systems_caching_1.SystemsCaching; } });
//# sourceMappingURL=index.js.map