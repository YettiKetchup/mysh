import { SystemsCaching } from '../../cahcing';
import { EntityStorage } from '../../storage';
export function OnResize(key) {
    return function (constructor) {
        const system = SystemsCaching.create(constructor);
        const collection = EntityStorage.get(key);
        new ResizeObserver(() => {
            system.execute(collection, {});
        }).observe(document.body);
    };
}
//# sourceMappingURL=on-resize.decorator.js.map