export class EntityBuilder {
    get _currentEntity() {
        return this._entity;
    }
    constructor(Entity) {
        this._entity = null;
        this._entity = new Entity();
    }
    withComponent(component) {
        this._currentEntity.add(component);
        return this;
    }
    isVisible() {
        this._currentEntity.visible = true;
        return this;
    }
    build() {
        return this._currentEntity;
    }
}
//# sourceMappingURL=entity.builder.js.map