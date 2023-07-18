var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Includes, System } from "../../core/system";
import { HealthComponent } from "../components/health.component";
export let HealSystem = class HealSystem extends System {
    constructor(_value) {
        super();
        this._value = _value;
    }
    execute(entities) {
        entities.loop((entity) => {
            const health = entity.get(HealthComponent, true);
            health.value += this._value;
            // const observable = entity.observable();
            // observable.add(new ManaComponent());
            // observable.remove(ManaComponent);
            // observable.active = false;
        });
    }
};
HealSystem = __decorate([
    Includes(HealthComponent)
], HealSystem);
//# sourceMappingURL=heal.system.js.map