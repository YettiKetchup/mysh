"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealSystem = void 0;
const system_1 = require("../../core/system");
const health_component_1 = require("../components/health.component");
let HealSystem = exports.HealSystem = class HealSystem extends system_1.System {
    constructor(_value) {
        super();
        this._value = _value;
    }
    execute(entities) {
        entities.loop((entity) => {
            const health = entity.get(health_component_1.HealthComponent);
            health.value += this._value;
            health.decreaseHealth();
            console.log(health);
            // const observable = entity.observable();
            // observable.add(new ManaComponent());
            // observable.remove(ManaComponent);
            // observable.active = false;
        });
    }
};
exports.HealSystem = HealSystem = __decorate([
    (0, system_1.Includes)(health_component_1.HealthComponent)
], HealSystem);
//# sourceMappingURL=heal.system.js.map