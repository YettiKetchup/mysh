"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stage = void 0;
const stage_decorators_1 = require("./decorators/stage.decorators");
let Stage = exports.Stage = class Stage {
    constructor() {
        this._createdModules = [];
    }
    init() {
        const { modules } = this;
        this._createdModules = modules.map((module) => {
            const createdModule = new module();
            createdModule.init();
            return createdModule;
        });
    }
    update(dt) {
        const { length } = this._createdModules;
        /**
         * Use for loop instead of forEach because for loop is faster.
         *  What is critical when updating.
         */
        for (let i = 0; i < length; i++) {
            this._createdModules[i].update(dt);
        }
    }
    destroy() {
        this._createdModules.forEach((module) => module.destroy());
    }
};
exports.Stage = Stage = __decorate([
    (0, stage_decorators_1.Modules)()
], Stage);
//# sourceMappingURL=stage.js.map