import { LifecycleSystemDistributor } from '../../distributor';
export function OnHook(hook) {
    return function (constructor) {
        LifecycleSystemDistributor.add(constructor, hook);
    };
}
//# sourceMappingURL=on-hook.decorator.js.map