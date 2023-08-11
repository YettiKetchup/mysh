export function Excludes(...excludes) {
    return function (constructor) {
        constructor.prototype.excludes = excludes;
    };
}
//# sourceMappingURL=excludes.decorator.js.map