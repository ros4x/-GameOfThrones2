import { HouseRules } from "../interfaces/HouseRules";

export class Stark implements HouseRules{
    region: string;
    words: string;
    constructor(region:string, words:string){
        this.region = region
        this.words = words
    }
}