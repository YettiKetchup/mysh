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
        console.log('WORK?!', constructor.prototype);
        constructor.prototype.withDisabled = withDisabled;
    };
}
//# sourceMappingURL=system.decorators.js.map