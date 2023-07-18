"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityObserver = void 0;
class EntityObserver {
    get type() {
        return this._type;
    }
    get watch() {
        return this._watch;
    }
    constructor(_subject, _type, _watch) {
        this._subject = _subject;
        this._type = _type;
        this._watch = _watch;
        this._pipes = [];
        this._callback = () => { };
    }
    pipe(condition) {
        this._pipes.push(condition);
        return this;
    }
    subscribe(callback) {
        this._callback = callback;
        this._subject.register(this);
    }
    unsubscribe() {
        this._subject.destroy(this);
    }
    execute(entity) {
        if (this.isCanExecute(entity)) {
            this._callback(entity);
        }
    }
    isCanExecute(entity) {
        for (let i = 0; i < this._pipes.length; i++) {
            const isCan = this._pipes[i](entity);
            if (!isCan)
                return false;
        }
        return true;
    }
}
exports.EntityObserver = EntityObserver;
//# sourceMappingURL=entity-observer.js.map