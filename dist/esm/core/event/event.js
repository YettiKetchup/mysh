export class Event {
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
//# sourceMappingURL=event.js.map