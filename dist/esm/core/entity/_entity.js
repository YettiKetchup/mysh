/**
 * An entity is a game object defined by a set of Components.
 * Like a Component, Entity is not a store of logic in itself,
 * except for that which is necessary to work with the set of Components in it.
 *
 * Even the static properties of the Entity events do not change it in any way,
 * but simply return new observer objects.
 *
 * @param name
 * Name of Entity. Might not be unique.
 * It does not play a particularly important role,
 * it is used for convenient error logging.
 *
   @param components
   Optional. Initial components.

 * @example
 *
 * const components = [
 *  new HealthComponent(100),
 *  new PlayerComponent()
 * ];
 *
 * const entity = new Entity("Player", components);
 */
export class Entity {
}
//# sourceMappingURL=_entity.js.map