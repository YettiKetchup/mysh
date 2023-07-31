"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.System = void 0;
const system_decorators_1 = require("./decorators/system.decorators");
/**
 * The system is a class in which all work with the data
 * of the Entity Components takes place.
 *
 * The system gets to work all the Entities whose Components
 * are specified in the Includes(...Components)
 * and Excludes(...Components) class decorators.
 * Entities are not transferred directly to the System,
 * the System always requests the necessary Entities
 * through filtering objects.
 *
 * The system may be asynchronous.
 * But keep in mind that all asynchronous Systems
 * will be executed by the Chain at the same order
 * as they were installed.
 *
 * @example
 *
 * // Synchronous System
 * class HealingSystem extends System<Entity> {
 *   execute(entities: SystemEntitiesCollection<Entity>): void {
 *     entities.loop(entity => {
 *       const health = entity.get(HealthComponent);
 *       const healer = entity.get(HealerComponent);
 *
 *       health.value += healer.value;
 *     });
 *   }
 * }
 *
 * // Asynchronous System
 * class DelaySystem extends System<Entity> {
 *   // This system does not specify the Components that the Entity
 *   // should have using the Includes(...Components) decorator,
 *   // so the System will not receive any Entities. However,
 *   // the execute() method will still be executed.
 *   async execute(entities: SystemEntitiesCollection<Entity>): Promise<void> {
 *     await sleep(2000);
 *   }
 * }
 */
let System = exports.System = class System {
    constructor() {
        this._entityCollection = null;
    }
    get collection() {
        return this._entityCollection;
    }
    get filter() {
        return {
            includes: this.includes,
            excludes: this.excludes,
            withDisabled: this.withDisabled,
        };
    }
    async execute(entities, decorator) {
        this._entityCollection = entities;
        const filter = decorator
            ? this.setupFilterDecorator(decorator)
            : this.filter;
        const filtered = entities.get(filter);
        await this.onExecute(filtered);
    }
    setupFilterDecorator(decorator) {
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
    (0, system_decorators_1.Includes)(),
    (0, system_decorators_1.Excludes)(),
    (0, system_decorators_1.WithDisabled)(false)
], System);
//# sourceMappingURL=system.js.map