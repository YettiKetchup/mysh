"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounce = void 0;
const debounce = (callback, delay = 0) => {
    let timer;
    return (...args) => {
        if (timer)
            clearTimeout(timer);
        timer = setTimeout(() => {
            callback(...args);
        }, delay);
    };
};
exports.debounce = debounce;
//# sourceMappingURL=debounce.util.js.map