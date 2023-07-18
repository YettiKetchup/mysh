import { Action } from "../../core/action";
import { HealSystem } from "../systems/heal.system";
export function createHealAction(entities) {
    const action = new Action(entities);
    action.add({
        system: new HealSystem(20),
    });
    return action;
}
//# sourceMappingURL=heal.action.js.map