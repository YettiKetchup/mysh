"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
class Event {
    constructor() {
        this._listeners = [];
    }
    on(listener) {
        this._listeners.push(listener);
        return {
            dispose: () => this.off(),
        };
    }
    off() {
        this._listeners.length = 0;
    }
    emit(event) {
        this._listeners.forEach((listener) => listener(event));
    }
}
exports.Event = Event;
//# sourceMappingURL=event.js.map