"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHealAction = void 0;
const action_1 = require("../../core/action");
const heal_system_1 = require("../systems/heal.system");
function createHealAction(entities) {
    const action = new action_1.Action(entities);
    action.add({
        system: new heal_system_1.HealSystem(20),
    });
    return action;
}
exports.createHealAction = createHealAction;
//# sourceMappingURL=heal.action.js.map