"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterSystems = void 0;
function RegisterSystems(providers) {
    return function (constructor) {
        if (!constructor.prototype.hasOwnProperty('providers')) {
            constructor.prototype.providers = [];
        }
        providers.forEach((provider) => {
            constructor.prototype.providers.push(provider);
        });
    };
}
exports.RegisterSystems = RegisterSystems;
//# sourceMappingURL=register-systems.decorator.js.map