"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enemy = void 0;
const entity_1 = require("../../core/entity");
const enemy_component_1 = require("../components/enemy.component");
const health_component_1 = require("../components/health.component");
const components = [new enemy_component_1.EnemyComponent(), new health_component_1.HealthComponent()];
exports.enemy = new entity_1.Entity("enemy", components);
//# sourceMappingURL=enemy.entity.js.map