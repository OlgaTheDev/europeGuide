import { ShortInfoModel } from "./shortInfo.model";

export class CountryModel {
    constructor(public name: string, 
        public info: string, 
        public shortInfo: ShortInfoModel, 
        public images: any[]) {}
}