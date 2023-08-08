import { EntitySubject, ObserverType } from '../observable';
/**
 * A wrapper around a Component that makes it observable.
 * On initialization, creates accessors for each field of the source object.
 * When changing or getting data through accessors,
 * it changes and returns the data of the original object,
 * and also fires the ObserverType.CHANGED event.
 *
 * !!!IMPORTANT!!!
 * Do not instantiate this Class in your code.
 * Use the entity.get(Component, isObservable) method,
 * which will return an instance of this class if the isObservable flag is true.
 */
export class ObservableComponentWrapper {
    constructor(entity, component) {
        this.setAcessors(entity, component);
    }
    setAcessors(entity, component) {
        for (let key in component) {
            Object.defineProperty(this, key, {
                get: () => component[key],
                set: (value) => {
                    component[key] = value;
                    this.notify(entity, component);
                },
            });
        }
    }
    notify(entity, component) {
        const event = ObserverType.CHANGED;
        const componentType = component.constructor;
        EntitySubject.notify(event, entity, componentType);
    }
}
//# sourceMappingURL=observable.component.js.map