"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeEntity = void 0;
const base_entity_1 = require("./base.entity");
class NodeEntity extends base_entity_1.Entity {
    get node() {
        return this._node;
    }
    constructor(_node) {
        super();
        this._node = _node;
    }
}
exports.NodeEntity = NodeEntity;
//# sourceMappingURL=node.entity.js.map