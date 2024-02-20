import { HouseRules } from "../interfaces/HouseRules";
import { Heir } from "./Heir";

export class NobleHouse implements HouseRules {
    name: string;
    motto: string;
    region: string;
    words: string;
    heirs: Heir[];
    
    constructor(name: string, motto: string, region: string, words: string) {
        this.name = name;
        this.motto = motto;
        this.region = region;
        this.words = words;
        this.heirs = [];
    }

    addHeir(heir: Heir) {
        this.heirs.push(heir);
    }
    printHouseInfo() {
        console.log(`House Name: ${this.name}`);
        console.log(`Motto: ${this.motto}`);
        console.log(`Region: ${this.region}`);
        console.log(`Words: ${this.words}`);
        console.log("Heirs:");
        this.heirs.forEach(heir => {
            console.log(heir.name);
        });
    }
}
