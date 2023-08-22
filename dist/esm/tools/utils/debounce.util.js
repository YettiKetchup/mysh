export const debounce = (callback, delay = 0) => {
    let timer;
    return (...args) => {
        if (timer)
            clearTimeout(timer);
        timer = setTimeout(() => {
            callback(...args);
        }, delay);
    };
};
//# sourceMappingURL=debounce.util.js.map