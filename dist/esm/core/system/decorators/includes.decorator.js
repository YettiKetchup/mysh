export function Includes(...includes) {
    return function (constructor) {
        constructor.prototype.includes = includes;
    };
}
//# sourceMappingURL=includes.decorator.js.map