"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.player = void 0;
const entity_1 = require("../../core/entity");
const health_component_1 = require("../components/health.component");
const player_component_1 = require("../components/player.component");
const components = [new player_component_1.PlayerComponent(), new health_component_1.HealthComponent()];
exports.player = new entity_1.Entity("player", components);
//# sourceMappingURL=player.entity.js.map