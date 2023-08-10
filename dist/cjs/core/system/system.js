"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.System = void 0;
const decorators_1 = require("./decorators");
let System = exports.System = class System {
    execute(entities, decorator, data) {
        const filter = this.filter(decorator);
        const filtered = entities.get(filter);
        this.onExecute(filtered, data);
    }
    filter(decorator) {
        let { includes, excludes, withDisabled } = this;
        includes = [...includes, ...(decorator.includes || [])];
        excludes = [...excludes, ...(decorator.excludes || [])];
        if (Object.hasOwn(decorator, 'withDisabled')) {
            withDisabled = decorator.withDisabled;
        }
        return { includes, excludes, withDisabled };
    }
};
exports.System = System = __decorate([
    (0, decorators_1.Includes)(),
    (0, decorators_1.Excludes)(),
    (0, decorators_1.WithDisabled)(false)
], System);
//# sourceMappingURL=system.js.map