import { EntitySubject } from '../../observable';
import { EntityChangesDistributor } from '../../distributor';
export function OnChanges(hook, component, pipe) {
    return function (constructor) {
        const observer = EntitySubject.on(hook, component);
        if (pipe)
            observer.pipe(pipe);
        EntityChangesDistributor.add(observer, constructor);
        //Todo: Смотреть не зарегана ли эта Система уже в хуках
    };
}
//# sourceMappingURL=on-chages.decorator.js.map