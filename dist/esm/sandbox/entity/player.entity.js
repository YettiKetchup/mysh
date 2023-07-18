import { Entity } from "../../core/entity";
import { HealthComponent } from "../components/health.component";
import { PlayerComponent } from "../components/player.component";
const components = [new PlayerComponent(), new HealthComponent()];
export const player = new Entity("player", components);
//# sourceMappingURL=player.entity.js.map