import { Entity } from './base.entity';
export class NodeEntity extends Entity {
    get node() {
        return this._node;
    }
    constructor(_node) {
        super();
        this._node = _node;
    }
}
//# sourceMappingURL=node.entity.js.map