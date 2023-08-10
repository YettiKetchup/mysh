"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Module = void 0;
const system_1 = require("../system");
const storage_1 = require("../storage");
const distributor_1 = require("../distributor");
class Module {
    get _providers() {
        return this.providers;
    }
    get collection() {
        return this._colelction;
    }
    constructor(collection) {
        this._colelction = null;
        this._observers = [];
        this._events = [];
        this._colelction = storage_1.EntityStorage.get(collection);
    }
    init() {
        this.listenEntities();
        this.listenEvents();
        this.runSystems(system_1.Lifecycle.Init);
    }
    postInit() {
        this.runSystems(system_1.Lifecycle.PostInit);
    }
    update(deltaTime) {
        this.runSystems(system_1.Lifecycle.Update, deltaTime);
    }
    postUpdate() {
        this.runSystems(system_1.Lifecycle.PostUpdate);
    }
    destroy() {
        this.runSystems(system_1.Lifecycle.Destroy);
        this.unsubscribe();
    }
    listenEvents() {
        if (!this._providers)
            return;
        this._providers.forEach((provider) => {
            this.setupEvents(provider);
        });
        this._events.forEach((item) => {
            const { event, system, filterDecorator } = item;
            event.on((data) => {
                system.execute(this.collection, filterDecorator, data);
            });
        });
    }
    listenEntities() {
        if (!this._providers)
            return;
        this._providers.forEach((provider) => {
            this.setupWatchers(provider);
        });
        this._observers.forEach((item) => {
            const { observer, system, filterDecorator } = item;
            observer.subscribe((entity) => {
                system.execute(this.collection, filterDecorator, entity);
            });
        });
    }
    unsubscribe() {
        this._observers.forEach((item) => {
            const { observer } = item;
            observer.unsubscribe();
        });
        this._events.forEach((item) => {
            const { event } = item;
            event.off();
        });
    }
    runSystems(lifecycle, deltaTime) {
        if (!this._providers)
            return;
        this._providers.forEach((provider) => {
            let filterDecorator = this.getFilterDecorator(provider);
            const system = this.getSystem(provider, lifecycle);
            if (system) {
                system.execute(this.collection, filterDecorator, deltaTime);
            }
        });
    }
    getFilterDecorator(provider) {
        const { includes, excludes } = provider;
        let filterDecorator = null;
        if (Object.hasOwn(provider, 'withDisabled')) {
            filterDecorator = {
                includes,
                excludes,
                withDisabled: provider.withDisabled,
            };
        }
        else {
            filterDecorator = { includes, excludes };
        }
        return filterDecorator;
    }
    getSystem(provider, lifecycle) {
        return distributor_1.LifecycleSystemDistributor.get(provider.provide, lifecycle);
    }
    setupWatchers(provider) {
        const watchers = distributor_1.EntityChangesDistributor.get(provider.provide);
        if (watchers) {
            const reactiveSystem = {
                observer: watchers.observer,
                system: watchers.system,
                filterDecorator: this.getFilterDecorator(provider),
            };
            this._observers.push(reactiveSystem);
        }
    }
    setupEvents(provider) {
        const watchers = distributor_1.EventDistributor.get(provider.provide);
        if (watchers) {
            const eventSystem = {
                event: watchers.event,
                system: watchers.system,
                filterDecorator: this.getFilterDecorator(provider),
            };
            this._events.push(eventSystem);
        }
    }
}
exports.Module = Module;
//# sourceMappingURL=module.js.map