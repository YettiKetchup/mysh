export function Modules(...moduleTypes) {
    return function (constructor) {
        constructor.prototype.modules = moduleTypes;
    };
}
//# sourceMappingURL=stage.decorators.js.map