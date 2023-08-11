export function WithDisabled(withDisabled) {
    return function (constructor) {
        constructor.prototype.withDisabled = withDisabled;
    };
}
//# sourceMappingURL=with-disabled.decorator.js.map