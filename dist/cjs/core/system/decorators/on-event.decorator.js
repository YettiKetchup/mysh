"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnEvent = void 0;
const event_distributor_1 = require("../../distributor/event.distributor");
function OnEvent(event) {
    return function (constructor) {
        event_distributor_1.EventDistributor.add(event, constructor);
    };
}
exports.OnEvent = OnEvent;
//# sourceMappingURL=on-event.decorator.js.map