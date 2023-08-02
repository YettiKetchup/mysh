export function Modules(...modules) {
    return function (constructor) {
        constructor.prototype.modules = modules;
    };
}
//# sourceMappingURL=stage.decorators.js.map