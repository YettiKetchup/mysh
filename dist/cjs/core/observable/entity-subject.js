"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntitySubject = void 0;
const entity_observer_1 = require("./entity-observer");
class EntitySubject {
    static { this._observers = []; }
    static register(observer) {
        this._observers.push(observer);
    }
    static destroy(observer) {
        this._observers = this._observers.filter((item) => item !== observer);
    }
    static notify(type, entity, watch) {
        const observers = watch
            ? this.getComponentSubjects(type, watch)
            : this.getEntitySubjects(type);
        observers.forEach((observer) => observer.execute(entity));
    }
    static getComponentSubjects(type, watch) {
        return this._observers.filter((observer) => observer.type === type && observer.watch === watch);
    }
    static getEntitySubjects(type) {
        return this._observers.filter((observer) => observer.type === type);
    }
    static on(watch, component) {
        return new entity_observer_1.EntityObserver(watch, component);
    }
}
exports.EntitySubject = EntitySubject;
//# sourceMappingURL=entity-subject.js.map