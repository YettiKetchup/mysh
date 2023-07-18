export function Includes(...includes) {
    return function (constructor) {
        constructor.prototype.includes = includes;
    };
}
export function Excludes(...excludes) {
    return function (constructor) {
        constructor.prototype.excludes = excludes;
    };
}
export function WithDisabled(withDisabled) {
    return function (constructor) {
        constructor.prototype.withDisabled = withDisabled;
    };
}
//# sourceMappingURL=system.decorators.js.map