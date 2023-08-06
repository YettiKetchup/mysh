import { Entity } from '../entity';
import { EntitiesCollection } from './entities.collection';
export declare class CombinedEntitiesCollection extends EntitiesCollection {
    private _colelctions;
    get entities(): Entity[];
    constructor(_colelctions: EntitiesCollection[]);
}
