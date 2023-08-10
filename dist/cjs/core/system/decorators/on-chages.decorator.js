"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnChanges = void 0;
const observable_1 = require("../../observable");
const distributor_1 = require("../../distributor");
function OnChanges(hook, component, pipe) {
    return function (constructor) {
        const observer = observable_1.EntitySubject.on(hook, component);
        if (pipe)
            observer.pipe(pipe);
        distributor_1.EntityChangesDistributor.add(observer, constructor);
        //Todo: Смотреть не зарегана ли эта Система уже в хуках
    };
}
exports.OnChanges = OnChanges;
//# sourceMappingURL=on-chages.decorator.js.map