export function RegisterSystems(providers) {
    return function (constructor) {
        if (!constructor.prototype.hasOwnProperty('providers')) {
            constructor.prototype.providers = [];
        }
        providers.forEach((provider) => {
            constructor.prototype.providers.push(provider);
        });
    };
}
//# sourceMappingURL=register-systems.decorator.js.map