import { ComponentType } from "../../component";
import { System } from "../../system/system";
export interface IActionPart {
    system: System<any>;
    includes?: ComponentType<any>[];
    excludes?: ComponentType<any>[];
    withDisabled?: boolean;
}
