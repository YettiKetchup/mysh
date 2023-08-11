import { SystemsCaching } from '../../cahcing';
import { EntityStorage } from '../../storage';
let mainKey = '';
const systems = [];
new ResizeObserver(() => {
    const collection = EntityStorage.get(mainKey);
    systems.forEach((system) => system.execute(collection, {}));
}).observe(document.body);
export function OnResize(key) {
    return function (constructor) {
        const system = SystemsCaching.create(constructor);
        systems.push(system);
        mainKey = key;
    };
}
//# sourceMappingURL=on-resize.decorator.js.map