import { Entity } from "../../core/entity";
import { EnemyComponent } from "../components/enemy.component";
import { HealthComponent } from "../components/health.component";
const components = [new EnemyComponent(), new HealthComponent()];
export const enemy = new Entity("enemy", components);
//# sourceMappingURL=enemy.entity.js.map